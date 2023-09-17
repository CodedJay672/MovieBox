const APIKey = "261b34855ce740d5613d726a1dd68fe2";

export async function topRated() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}`, {
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    const results = data.results.slice(0, 10);
    return results;
  } catch (error) {
    throw new Response("", {
      status: 404,
      statusText: "Error fetching movies " + error
    });
  }
}

export async function movieDetail(id) {
  try {
    if (id) {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`, {
        headers: {
          Accept: "application/json"
        }
      })
      const result = await response.json();
      return result;
    }
  } catch (err) {
    throw new Response("", {
      status: 404,
      statusText: "Error fetching movie details " + err
    });
  }
}