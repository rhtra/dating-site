import fire from './assets/fire.svg';
import diamond from './assets/diamond.svg';
import crown from './assets/crown.svg';


export const stepData = [
    {   id: 'stepNo1',
        stepNo: 1,
        stepDesc: "Your info",
    },
    {   id: 'stepNo2',
        stepNo: 2,
        stepDesc: "Select preference",
    },
    {
        id: 'stepNo3',
        stepNo: 3,
        stepDesc: "Plans",
    },
    {
        id: 'stepNo4',
        stepNo: 4,
        stepDesc: "Add-ons",
    },
    {
        id: 'stepNo5',
        stepNo: 5,
        stepDesc: "Summary",
    },
]

export const plans = [
    {
        id: 'plan1',
        planName:'Basic',
        monthlyPrice: 9,
        yearlyPrice: 90,
        free: 0,
        img: fire,
        desc: '100 likes available everyday',
    }, 
    {
        id: 'plan2',
        planName:'Advanced',
        monthlyPrice: 12,
        yearlyPrice: 120,
        free: 2,
        img: diamond,
        desc: 'Unlimited likes',
    }, 
    {
        id: 'plan3',
        planName:'Royalty',
        monthlyPrice: 15,
        yearlyPrice: 150,
        free: 4,
        img: crown,
        desc: 'Unlimited likes and see who matched you',
    }, 

]

export const addOns = [
    {
        id: 'addOn1',
        name: 'Cloud Storage',
        desc: 'Save pictures and videos up to 200GB',
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
    {
        id: 'addOn2',
        name: 'Backtracking',
        desc: 'Ability to undo unlikes',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
    {
        id: 'addOn3',
        name: 'Highlight Profile',
        desc: 'Your profile will be highlighted for everyone',
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
]