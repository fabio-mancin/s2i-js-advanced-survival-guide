(async()=>{const n=await fetch("/.netlify/functions/getPollution"),o=await n.json();console.log(o)})();