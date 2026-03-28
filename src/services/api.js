const API_BASE_URL = 'https://comp229-22gt.onrender.com/api';

// Helper function for all fetch requests
const apiFetch = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
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
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error: error.message };
  }
};

// ===== USERS =====
export const getUsers = async () => {
  return apiFetch('/users');
};

export const getUserById = async (id) => {
  return apiFetch(`/users/${id}`);
};

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
export const getProjects = async () => {
  return apiFetch('/projects');
};

export const getProjectById = async (id) => {
  return apiFetch(`/projects/${id}`);
};

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
export const getServices = async () => {
  return apiFetch('/services');
};

export const getServiceById = async (id) => {
  return apiFetch(`/services/${id}`);
};

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
export const getReferences = async () => {
  return apiFetch('/references');
};

export const getReferenceById = async (id) => {
  return apiFetch(`/references/${id}`);
};

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
