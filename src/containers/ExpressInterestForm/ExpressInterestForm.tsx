import { FunctionComponent, useState } from 'preact/hooks';
import {
  Button,
  Field,
  Input,
  InLineAlert,
  Picker,
} from '@adobe-commerce/elsie/components';
import { submitExpressInterest } from '../../api/submitExpressInterest';
import type { ExpressInterestPayload } from '../../api/submitExpressInterest';

import './ExpressInterestForm.css';

const CUSTOMER_TYPE_OPTIONS = [
  { value: '', text: 'Select customer type' },
  { value: 'Individual', text: 'Individual' },
  { value: 'Business', text: 'Business' },
  { value: 'Reseller', text: 'Reseller' },
];

export interface ExpressInterestFormProps {
  baseUrl: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ExpressInterestForm: FunctionComponent<ExpressInterestFormProps> = ({
  baseUrl,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    if (!firstName?.trim()) {
      setErrorMessage('First name is required');
      return false;
    }
    if (!lastName?.trim()) {
      setErrorMessage('Last name is required');
      return false;
    }
    if (!email?.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload: ExpressInterestPayload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
    };
    if (mobileNumber?.trim()) payload.mobileNumber = mobileNumber.trim();
    if (country?.trim()) payload.country = country.trim();
    if (['Individual', 'Business', 'Reseller'].includes(customerType)) {
      payload.customerType = customerType as ExpressInterestPayload['customerType'];
    }

    try {
      await submitExpressInterest(baseUrl, payload);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  if (status === 'success') {
    return (
      <div className="express-interest-form express-interest-form--success">
        <InLineAlert
          type="success"
          heading="Thank you"
          description="Your expression of interest has been submitted successfully."
        />
      </div>
    );
  }

  return (
    <form
      className="express-interest-form"
      onSubmit={handleSubmit}
      noValidate
    >
      {status === 'error' && errorMessage && (
        <InLineAlert
          type="error"
          heading="Submission failed"
          description={errorMessage}
        />
      )}

      <Field label="First name" error={status === 'error' && !firstName ? 'Required' : undefined}>
        <Input
          name="firstName"
          value={firstName}
          onInput={(e) => setFirstName((e.target as HTMLInputElement).value)}
          placeholder="First name"
          required
          disabled={status === 'submitting'}
        />
      </Field>

      <Field label="Last name" error={status === 'error' && !lastName ? 'Required' : undefined}>
        <Input
          name="lastName"
          value={lastName}
          onInput={(e) => setLastName((e.target as HTMLInputElement).value)}
          placeholder="Last name"
          required
          disabled={status === 'submitting'}
        />
      </Field>

      <Field label="Email" error={status === 'error' && !email ? 'Required' : undefined}>
        <Input
          name="email"
          type="email"
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Email"
          required
          disabled={status === 'submitting'}
        />
      </Field>

      <Field label="Mobile number (optional)">
        <Input
          name="mobileNumber"
          type="tel"
          value={mobileNumber}
          onInput={(e) => setMobileNumber((e.target as HTMLInputElement).value)}
          placeholder="Mobile number"
          disabled={status === 'submitting'}
        />
      </Field>

      <Field label="Country (optional)">
        <Input
          name="country"
          value={country}
          onInput={(e) => setCountry((e.target as HTMLInputElement).value)}
          placeholder="Country"
          disabled={status === 'submitting'}
        />
      </Field>

      <Field label="Customer type (optional)">
        <Picker
          name="customerType"
          value={customerType || null}
          options={CUSTOMER_TYPE_OPTIONS}
          placeholder="Select customer type"
          handleSelect={(e) =>
            setCustomerType((e.target as HTMLSelectElement).value || '')
          }
          disabled={status === 'submitting'}
        />
      </Field>

      <div className="express-interest-form__actions">
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};
