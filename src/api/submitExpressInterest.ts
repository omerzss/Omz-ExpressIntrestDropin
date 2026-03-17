/**
 * Payload for Express Interest form submission.
 */
export interface ExpressInterestPayload {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber?: string;
  country?: string;
  customerType?: 'Individual' | 'Business' | 'Reseller';
}

const SUBMIT_PATH = '/api/v1/web/ExpressInterest/submit-public';

/**
 * Submits the Express Interest form to the App Builder submit-public endpoint.
 *
 * @param baseUrl - App Builder runtime origin with no trailing slash (e.g. https://xxx.dev.runtime.adobe.io)
 * @param payload - Form data (firstName, lastName, email required; mobileNumber, country, customerType optional)
 * @returns Response from the API
 * @throws Error on network failure or non-2xx response
 */
export async function submitExpressInterest(
  baseUrl: string,
  payload: ExpressInterestPayload
): Promise<Response> {
  const url = baseUrl.replace(/\/$/, '') + SUBMIT_PATH;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Express Interest submission failed: ${response.status} ${response.statusText} - ${text}`);
  }

  return response;
}
