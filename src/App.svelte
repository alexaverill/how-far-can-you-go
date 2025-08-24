<script lang="ts">
	import { Map, TileLayer, Marker, Popup, Polyline,GeoJSON,Icon, ControlZoom } from 'sveaflet';
  import Guess from './lib/Guess.svelte';
  import CarInfo from './lib/CarInfo.svelte';
  import Answer from './lib/Answer.svelte';
  import data from "./data.json";
  import { museumIcon,genericIcon } from './lib/MarkerDefintions';
  import Title from './lib/Title.svelte';
  import Attract from './lib/Attract.svelte';
  let isAttract = $state(true);
  let isConclusion = $state(false);
  let currentCarIndex = 0;
  let currentCar = $state(data.cars[0]);
  let currentIcon = $state(data.cars[0].icon ?? genericIcon);
  let lineColor = $state(data.cars[0]?.lineColor ?? "red")
	let marker: Marker;
  let hasClicked:boolean=$state(false);
  let map:Map;  
  let museumLocation:Array<number> = [41.513319,-81.612571];
  let mapCenter:Array<number> =  [41.51461251466686,-81.53846740722658]
  let markerPosition:Array<number> = $state(mapCenter);
  let distance:number | string=$state(0);
  let geoJsons = $state([]);
  const convertMetersToMiles = (meters:number)=>{
    return (meters / 1609.344).toFixed(2);
  }
  let status:string = '';
  let hasGuessed = $state(false);
  let buttonText = $state("Next");
function style(feature) {
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
    map.panTo(museumLocation);
    map.setZoom(currentCar.answerZoom);
    
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
    hasClicked = false;
    distance = 0;
    markerPosition = mapCenter;
    if(isConclusion){
      reset();
    }else if(currentCarIndex === data.cars.length-1){
      isConclusion = true;
      data.cars[currentCarIndex].icon
    }else{
      currentCarIndex = (currentCarIndex +1)%data.cars.length;
      currentCar = data.cars[currentCarIndex];
      lineColor = data.cars[currentCarIndex].lineColor
;      if(data.cars[currentCarIndex].icon){
        currentIcon  = data.cars[currentCarIndex].icon;
      }else{
        currentIcon = genericIcon;
      }
    }
    
  }
  const reset = ()=>{
          currentCarIndex = 0;
      currentCar = data.cars[currentCarIndex];
      geoJsons =[];
      map.panTo(museumLocation);
    isConclusion= false;
    isAttract = true;
  }
</script>

<div class="map">
	<Map
		options={{
			center: mapCenter,
			zoom: 11,
      zoomControl:false
		}}
    bind:instance={map}
    onclick={(e:any)=>{
      if(hasGuessed){return;}
      hasClicked = true;
      let latitude = e.latlng.lat;
      let longitude = e.latlng.lng;
      markerPosition = [latitude,longitude]
      distance =convertMetersToMiles(map.distance(museumLocation,markerPosition));
    }}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
     {#if !isAttract}<ControlZoom options={{position:"bottomleft"}}/>{/if}
    <Marker latLng= {museumLocation}>
      <Icon options={museumIcon}/>
    </Marker>
    {#if hasClicked}
        <Polyline
          latLngs={[
            museumLocation,
            markerPosition
          ]}
          options={{color:lineColor}}
        />
    		<Marker latLng={markerPosition} bind:instance={marker}>
          <Icon options={currentIcon}/>
        </Marker>
       
    {/if}
    <!-- <GeoJSON json={data.cars[0].rangeJson} options={{ attribution: 'GeoJSON' }} /> -->
    {#each geoJsons as [component,props]}
        <svelte:component this={component} {...props}/>
    {/each}
	</Map>
</div>
{#if isAttract}
  <Attract clicked={()=>{isAttract = false;}}/>
{:else}
  <Title/>
  {#if !isConclusion}
    {#key currentCar}
      <CarInfo 
        image={currentCar.image} 
        name={currentCar.name} 
        description={currentCar.description}
        year={currentCar.year}
        manufacturer={currentCar.manufacturer}
      />
    {/key}
  {/if}
  <Guess 
  {distance}
  guess={handleGuess} 
  status={status} 
  description={currentCar.answerDescription} 
  next={handleNext}
  buttonText={"Next"}
  {isConclusion}
  />
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