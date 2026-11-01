const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
 const bar=document.querySelector('.speed-bar');
const speed=document.querySelector('.speed');
const video=document.querySelector('.flex');
function handleMove(e){
const y=e.pageY-this.offsetTop;
	const percent=y/this.offsetHeight;
	const min=0.4;
	const max=4.0;
	const height=Math.round(percent*100)+'%';
	const playbackRate=percent*(max-min)+min;
	bar.style.height=height;
	bar.textContent=playbackRate.toFixed(1)+'x';
	video.playbackRate=playbackRate;	
}
speed.addEventListener('mousemove',handleMove);