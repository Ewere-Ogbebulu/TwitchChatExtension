const URL = "https://dashboard.twitch.tv/popout/u/godworm/stream-manager/chat?uuid=69670636da24886cbc6fa41434f783b0"

async function fetchData() {
    const response = await fetch(URL);
    console.log(response);
    
}
fetchData();