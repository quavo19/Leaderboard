const getResponse = async () => {
  try {
    const AvatarURL = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BSY5VexV1P3xkitZrGsn/scores');
    const response = await AvatarURL.json();
    return response.result;
  } catch (error) {
    return error;
  }
};
export default getResponse;