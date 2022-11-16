<script>
  import { onMount, onDestroy } from "svelte";
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  export let data;
  let info = 0
  


  function fetchMovies() {
    let url = "https://svelte-for-azure.lazardragos.repl.co/api"
    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    info=data
  });
  
  }

  const interval = setInterval(async () => {
    fetchMovies();
  }, 3000);

  onMount(async () => {
    fetchMovies();
  });

  onDestroy(() => clearInterval(interval));



</script>

<svelte:head>
	<title>Home Lazar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>





<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
  
  
    <div class="place-content-center">
    <p>CO2: {info.CO2}</p>
    <p>TVOC: {info.TVOC}</p>
    <p>humidity: {info.humidity}</p>
    <p>pressure: {info.pressure}</p>
    <p>temp: {info.temp}</p>
    </div>


<style>
</style>
