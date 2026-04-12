const API_BASE_URL = 'https://comp229-22gt.onrender.com/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('token');

// Generic fetch helper
const apiFetch = async (endpoint, options = {}) => {
  const token = getToken();

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, mergedOptions);

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      return {
        success: false,
        message: data.message || `HTTP error! status: ${response.status}`,
      };
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      message: error.message || 'Network error',
    };
  }
};

// ===== AUTH =====
export const signupUser = async (userData) => {
  return apiFetch('/users/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const signinUser = async (userData) => {
  return apiFetch('/users/signin', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

// ===== USERS =====
export const getUsers = async () => apiFetch('/users');

export const getUserById = async (id) => apiFetch(`/users/${id}`);

export const createUser = async (userData) => {
  return apiFetch('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const updateUser = async (id, userData) => {
  return apiFetch(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  });
};

export const deleteUser = async (id) => {
  return apiFetch(`/users/${id}`, {
    method: 'DELETE',
  });
};

// ===== PROJECTS =====
export const getProjects = async () => apiFetch('/projects');

export const getProjectById = async (id) => apiFetch(`/projects/${id}`);

export const createProject = async (projectData) => {
  return apiFetch('/projects', {
    method: 'POST',
    body: JSON.stringify(projectData),
  });
};

export const updateProject = async (id, projectData) => {
  return apiFetch(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(projectData),
  });
};

export const deleteProject = async (id) => {
  return apiFetch(`/projects/${id}`, {
    method: 'DELETE',
  });
};

// ===== SERVICES =====
export const getServices = async () => apiFetch('/services');

export const getServiceById = async (id) => apiFetch(`/services/${id}`);

export const createService = async (serviceData) => {
  return apiFetch('/services', {
    method: 'POST',
    body: JSON.stringify(serviceData),
  });
};

export const updateService = async (id, serviceData) => {
  return apiFetch(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(serviceData),
  });
};

export const deleteService = async (id) => {
  return apiFetch(`/services/${id}`, {
    method: 'DELETE',
  });
};

// ===== REFERENCES =====
export const getReferences = async () => apiFetch('/references');

export const getReferenceById = async (id) => apiFetch(`/references/${id}`);

export const createReference = async (referenceData) => {
  return apiFetch('/references', {
    method: 'POST',
    body: JSON.stringify(referenceData),
  });
};

export const updateReference = async (id, referenceData) => {
  return apiFetch(`/references/${id}`, {
    method: 'PUT',
    body: JSON.stringify(referenceData),
  });
};

export const deleteReference = async (id) => {
  return apiFetch(`/references/${id}`, {
    method: 'DELETE',
  });
};