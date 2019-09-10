const ipc = require('electron').ipcRenderer

w = window.innerWidth;
h = window.innerHeight;

document.querySelector('body').classList.add('bg-dark')

p = document.createElement('p')
p.style="color: white; margin-top: 15vh; font-size: 200px"

h1 = document.createElement('h1')
h1.style="color: white;"

create_vid = () => {
    div = document.getElementById('screen')
    div.style="text-align:center"

    
    vid = document.createElement('video')
    vid.height = h
    vid.style="margin: 0 auto; display:inline-block; margin-top: 8vh;"
    vid.autoplay = true
    
    vid_source = document.createElement('source')
    vid_source.src = "./videos/test.mp4"
    vid_source.type = "video/mp4"
    
    
    div.appendChild(vid)
    vid.appendChild(vid_source)
}

i = 0

repeat_play = (nums) => {

    i++
    
    if (nums.length == 0) {
        div.innerHTML = "done"
    }

    else {
        create_vid()
        vid.onended = () => {
            div.innerHTML = ""
            div.appendChild(h1)
            h1.innerHTML="Lucky Number " + i.toString()
            div.appendChild(p)
            p.innerHTML = nums[nums.length - 1]
            setTimeout(() => {
                div.innerHTML = ""
                nums.pop()
                repeat_play(nums)
            }, 5000)
        }
    }
    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


ipc.on('numbers', (event, arg) => {
    nums = arg
    shuffleArray(nums)
    repeat_play(nums)
})