w = window.innerWidth;
h = window.innerHeight;

document.querySelector('body').classList.add("bg-dark")


createvid = () => {
    div = document.getElementById('d')

    vid = document.createElement('video')
    vid.height = h
    vid.style="margin: 0 auto; width: 100%; display:block;"
    vid.autoplay = true

    sou = document.createElement('source')
    sou.src = "./videos/test.mp4"
    sou.type = "video/mp4"
    d.style="text-align:center"


    div.appendChild(vid)
    vid.appendChild(sou)
}

nums = [10, 123, 4545, 23]

repeat_play = (nums) => {

    if (nums.length == 0) {
        document.getElementById('d').innerHTML = "done"
    }

    else {
        createvid()
        vid.onended = () => {
            document.getElementById('d').innerHTML = ""
            document.getElementById('d').innerHTML = nums[nums.length - 1]
            setTimeout(() => {
                document.getElementById('d').innerHTML = ""
                nums.pop()
                repeat_play(nums)
            }, 5000)
        }
    }

}

repeat_play(nums)