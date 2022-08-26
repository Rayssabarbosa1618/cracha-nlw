const links = {
    github: "Rayssabarbosa1618",
    youtube:"UCany0ws1z-cvZUopZKSsNIQ",
    instagram:"rayss_abarbosa14"
}

function changeSocialMedialinks(){

    for (let li of changeSocialMedialinks){
        const social= li.getAttribute('class')
        li.children[0].hrf= `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMedialinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/ ${LinksSocialMedia.github}`
}

 buscar ( url )