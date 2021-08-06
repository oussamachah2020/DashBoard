// const Content = document.querySelector('.container')
//for the DashBoard Icon
const DashIcon = document.getElementById('DashIcon')
const DashName = document.querySelector('#Dash')
console.log(DashName);
//for the Profile Icon
const ProfileIcon = document.querySelector('#Prfl')
const ProfileName = document.querySelector('#Profile')
//for the Messages Icon
const MessageIcon = document.querySelector('#Msg')
const MessageName = document.querySelector('#Message')


//for the Content DashBoard
const Content = document.querySelector('.content')
console.log(Content);

function VisibleDash() {
    Content.classList.remove('unseen')
    Content.classList.add('seen')
}

function HiddenDash() {
    Content.classList.remove('seen')
    Content.classList.add('unseen')
}

DashIcon.addEventListener('click',() => {
    const On = Content.classList.contains('unseen')

    if(On) {
        VisibleDash();
        HiddenMsgs()
        HiddenProfile()
        // Content.style.transform = 'translateY(0%)'
    }else {
        HiddenDash()
        // Content.style.transform = 'translateY(-150%)'
    }
    console.log('ok');
})

//--------------------------------------------------------
DashIcon.onmouseover = function() {
    DashName.style.transform = 'translate(2.7pc,-7pc)';
}
DashIcon.onmouseout = function() {
    DashName.style.transform = 'translate(2.7pc,-5pc)';
}

//--------------------------------------------------------
ProfileIcon.onmouseover = function() {
    ProfileName.style.transform = 'translate(9.6pc,-10pc)';
}
ProfileIcon.onmouseout = function() {
    ProfileName.style.transform = 'translate(9.6pc,-8pc)';
}

//--------------------------------------------------------
MessageIcon.onmouseover = function() {
    MessageName.style.transform = 'translate(15pc,-13.2pc)';
}
MessageIcon.onmouseout = function() {
    MessageName.style.transform = 'translate(15pc,-11pc)';
}

//for the Message Page
const MsgPage = document.querySelector('.Messages_Zone')
const Msgs = document.querySelectorAll('.inbox')
const Options = document.querySelectorAll('.options')

function ShowIcons(msg) {
    msg.onmouseover = function() {
        Options.forEach(option => {
            option.style.opacity = '1'
        })
    }
}

function HideIcons(msg) {
    msg.onmouseout = function() {
        Options.forEach(option => {
            option.style.opacity = '0'
        })
    }
}

Msgs.forEach(msg => {
    ShowIcons(msg)
    HideIcons(msg)
})

function VisibleMsgs() {
    MsgPage.classList.remove('desactive')
    MsgPage.classList.add('active')
}

function HiddenMsgs() {
    MsgPage.classList.remove('active')
    MsgPage.classList.add('desactive')
}

MessageIcon.addEventListener('click', () => {
    const msgOn = MsgPage.classList.contains('desactive')
    
    if(msgOn) {
        VisibleMsgs()
        HiddenDash()
        HiddenProfile()
    }else {
        HiddenMsgs()
    }
})

function VisibleProfile() {
    Profile.classList.remove('logOut')
    Profile.classList.add('logIn')
}

function HiddenProfile() {
    Profile.classList.remove('logIn')
    Profile.classList.add('logOut')
}

//For Profile Page
const Profile = document.querySelector('.Profile');
ProfileIcon.addEventListener('click', () => {
    const UserIn = Profile.classList.contains('logOut');

    if(UserIn) {
        VisibleProfile()
        HiddenDash()
        HiddenMsgs()
    }else {
        HiddenProfile()
    }
})
// doughnut chart with Chart.js

var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.defaultFontSize = 17;
Chart.defaults.global.defaultFontFamily = 'verdana'

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Amount of Profits (%)',
            data: [15, 17, 28, 20.5, 8, 13.2],
            backgroundColor: ['rgba(18, 217, 200, 0.472)',],
            borderColor: [
                // '#fff',
                'rgb(238, 70, 107)',
                'rgba(11, 23, 243, 0.507)',
                'rgba(255, 206, 86, 1)',
                'rgb(27, 233, 27)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 4,
            fill: true,
        }]
    },
    options: {
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
            }
        },
        legend: {
            title: String
        }
    },
});

var Active = document.getElementById('Activities').getContext('2d')
var myGraph = new Chart(Active, {
    type:'doughnut',
    data: {
        labels:  ['2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            // title: 'Time (Hour)',
            label: ['Activities per Month'],
            data: [4,10,6,11,2.5,8],
            backgroundColor: [
                'rgba(238, 70, 106, 0.451)',
                'rgba(74, 82, 233, 0.298)',
                'rgba(236, 194, 87, 0.437)',
                'rgba(64, 236, 64, 0.431)',
                'rgba(153, 110, 238, 0.354)',
                'rgba(245, 163, 81, 0.375)'
            ],
            borderColor: [
                // '#fff',
                'rgb(238, 70, 107)',
                'rgba(11, 23, 243, 0.507)',
                'rgba(255, 206, 86, 1)',
                'rgb(27, 233, 27)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 4
        }],

    },

    options: {
        legend: {
            position: 'right',
            left: 10,
            title: String
        },
    }
})