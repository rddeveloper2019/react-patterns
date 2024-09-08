export const fetchUsers = async <T>(options?: RequestInit): Promise<T> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    options,
  );
  return await response.json();
};
