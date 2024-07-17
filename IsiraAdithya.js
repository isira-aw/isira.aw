// CV URL Section.

const newCopyButton = document.getElementById('newCopyButton');
const newCvUrl = "https://drive.usercontent.google.com/u/0/uc?id=1VjQeU4WutuQCVEvP1zvciltBR-nLgfAw&export=download";
 // WHEN YOU  cope that ural to replace this it try to download first and get that URL there have end  "=download" look like this
newCopyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(newCvUrl).then(() => {
        alert('CV URL copied successfully.\n      URL PASTE YOUR SEARCH ENGINE PLEASE.');
    });
});
        function function2(){
            window.location.href = "https://github.com/isira-aw";
        } 
        function function3(){
            window.location.href = "https://lk.linkedin.com/in/isira-weerasinghe-ba91b027b";
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

document.querySelectorAll('img').forEach(image => { image.onclick =() =>{
    document.querySelector('.popMain').style.display = 'block';
    document.querySelector('.popMain img').src = image.getAttribute('src');
}    });
document.querySelector('.popMain span').onclick = () => {
    document.querySelector('.popMain').style.display = 'none';   
};
