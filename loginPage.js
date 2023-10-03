import { Selector } from 'testcafe';
import Colors from 'colors'
const nameInput= Selector('input#username');
const pass=Selector('input#password');
const loginBtn=Selector('button#login');
const errortext=Selector('div#login-error-notify');
const dashboardscreen=Selector('h5#Welcome to DeepThought');


fixture('Getting Started')
    .page('https://dev.deepthought.education/login');

test('valid login credentials', async t => {
    await t
    .maximizeWindow()
    .typeText(nameInput,'deep33059')
    .typeText(pass, 'Dpk@9893863093')
    .click(loginBtn)
    .wait(4000)

    const validationText= await dashboardscreen.innerText

    console.log(validationText.green)


               
});

test('invalid login credentials', async t => {
    await t
    .maximizeWindow()
    .typeText(nameInput,'deep33059')
    .typeText(pass, 'Dpk@9893863092')
    .click(loginBtn)

    .wait(3000)


    const text1 =await errortext.innerText;


    console.log(text1.red);
    


        //.wait(9000);
        
});