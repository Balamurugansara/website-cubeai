// API service utility for making requests to the backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Submit contact enquiry
 */
export async function submitEnquiry(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Failed to submit enquiry',
      };
    }

    return {
      success: true,
      message: result.message || 'Enquiry submitted successfully',
    };
  } catch (error) {
    console.error('Enquiry submission error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Submit career application with resume
 */
export async function submitCareerApplication(data: {
  name: string;
  email: string;
  position: string;
  coverLetter: string;
  resume: File;
}): Promise<ApiResponse> {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('position', data.position);
    formData.append('coverLetter', data.coverLetter);
    formData.append('resume', data.resume);

    const response = await fetch(`${API_URL}/api/career`, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - browser will set it with boundary for multipart/form-data
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Failed to submit application',
      };
    }

    return {
      success: true,
      message: result.message || 'Application submitted successfully',
    };
  } catch (error) {
    console.error('Career application error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Failed to subscribe',
      };
    }

    return {
      success: true,
      message: result.message || 'Subscribed successfully',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

export { API_URL };
