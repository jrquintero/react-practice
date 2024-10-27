// https://dumyjson.com/users

export async function fetchCharacters() {
  try {
    const respose = await fetch('https://dummyjson.com/users');
    const results = await respose.json();
    return results.users;
  } catch (error) {
    console.log(error);
  }
}