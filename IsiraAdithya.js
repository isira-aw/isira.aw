
        function function1(){
            window.location.href = "gallery.html";
        }
        function function2(){
            window.location.href = "sitemap.html";
        } 
        function function3(){
            window.location.href = "Isira_content.html";
        }


        /* background video */

const section = document.querySelector('section.vid');
const vid = section.querySelector('video');

vid.pause();

const scroll = () => {
    const dis = window.scrollY - section.offsetTop;
    const total = section.clientHeight - window.innerHeight;

    let per = dis / total;
    per = Math.max(0, per);
    per = Math.min(per, 1);

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * per;
    }
};

/* green line */

scroll();
window.addEventListener('scroll', scroll);

window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollPercentage + '%';
});
