<script lang="ts">
	import { Map, TileLayer, Marker, Popup, Polyline,GeoJSON } from 'sveaflet';
  import Guess from './lib/Guess.svelte';
  import CarInfo from './lib/CarInfo.svelte';
  import Answer from './lib/Answer.svelte';
  import data from "./data.json";
  let currentCarIndex = 0;
  let currentCar = $state(data.cars[0]);
	let marker: Marker;
  let map:Map;  
  let mapCenter:Array<number> =  [41.51461251466686,-81.53846740722658]//[41.513319,-81.612571]
  let markerPosition:Array<number> = $state(mapCenter);
  let distance:number | string=$state(0);
  let geoJsons = $state([]);
  const convertMetersToMiles = (meters:number)=>{
    return (meters / 1609.344).toFixed(2);
  }
  let status:string = '';
  let hasGuessed = $state(false);
function style(feature) {
  console.log(feature)
    return {
        fillColor: "",
        opacity: 1,
        color: feature?.style?.fill ?? "pink",
        dashArray: '1',
        fillOpacity: 0,
        border:"black",
    };
}
  const handleGuess = ()=>{
    map.setZoom(currentCar.answerZoom)
    geoJsons.push([GeoJSON,{json:currentCar.rangeJson,options:{style:style}}]);
    if(parseFloat(distance) < currentCar.range){
      status=`You Made It!`
    }else{
      status=`Can't Make it!`
    }
    hasGuessed =true;
  }
  const handleNext = ()=>{
    
    hasGuessed = false;
    distance = 0;
    markerPosition = mapCenter;
    currentCarIndex = (currentCarIndex +1)%data.cars.length;
    currentCar = data.cars[currentCarIndex];
    
  }
</script>

<div class="map">
	<Map
		options={{
			center: mapCenter,
			zoom: 11
		}}
    bind:instance={map}
    onclick={(e:any)=>{
      console.log(e);
      let latitude = e.latlng.lat;
      let longitude = e.latlng.lng;
      markerPosition = [latitude,longitude]
      distance =convertMetersToMiles(map.distance(mapCenter,markerPosition));
    }}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
		<Marker latLng={markerPosition} bind:instance={marker}>

		</Marker>
          <Polyline
			latLngs={[
				mapCenter,
				markerPosition
			]}
		/>
    <!-- <GeoJSON json={data.cars[0].rangeJson} options={{ attribution: 'GeoJSON' }} /> -->
    {#each geoJsons as [component,props]}
        <svelte:component this={component} {...props}/>
    {/each}
	</Map>
</div>

<CarInfo 
  image={currentCar.image} 
  name={currentCar.name} 
  description={currentCar.description}
  year={currentCar.year}
  manufacturer={currentCar.manufacturer}
/>
<Guess {distance} on:click={handleGuess}/>
{#if hasGuessed}
  <Answer status={status} description={currentCar.answerDescription} on:click={handleNext}/>
{/if}
<style>
  .map{
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    z-index: -1;
  }
</style>