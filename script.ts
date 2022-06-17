window.onload = async function() { // getting initial dog image
    await getRandomDog()
}

const dog_btn: HTMLElement = document.getElementById('dog_button')!

dog_btn.addEventListener('click', getRandomDog)
dog_btn.addEventListener('load', getRandomDog)

async function getRandomDog(): Promise<void> {
    const response: Response = await fetch('https://random.dog/woof.json')
    const dogData: RandomDogResponse = await response.json()
    const dog_result: HTMLElement = document.getElementById('dog_result')!


    if (dogData.url.includes('.mp4')) {
        getRandomDog()
    } else {
        dog_result.innerHTML = `<img src="${dogData.url}"/>`
    }

}

interface RandomDogResponse {
    fileSizeBytes: number
    url: string
}