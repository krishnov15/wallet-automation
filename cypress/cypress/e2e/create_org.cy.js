

it ('Aria Home', () => {
    cy.visit('https://wallet.test.myaria.network/')
    cy.viewport(1280,800)
    cy.xpath("//img[@alt='Aria Logo']").should('exist')
    cy.get('#\\\:r0\\\:').type('krishnov@dcentric.health').blur()
    cy.get('#\\\:r1\\\:').type('Password*1').blur()
    cy.get('#\\\:r2\\\:').click()
    console.log("After clicking the button");
    cy.wait(5000)
    cy.get('#\\\:r4\\\:').type('trial defense tornado olympic test shallow boil move distance tonight metal audit pull lady turtle')
    cy.get('#\\\:r5\\\:').click()
    cy.wait(5000)
    cy.get('.MuiInputBase-root').click()
    cy.get('[data-value=""] > .MuiTypography-root').click()
    cy.wait(5000)
    cy.get('#\\\:ru\\\:').type('Nov'+generateString(5))
    cy.get('#mui-component-select-org_type').click()
    cy.get('.MuiList-root > [tabindex="0"]').click()
    cy.get('#\\\:rv\\\:').type('12345')
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('[data-testid="option-PH"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('#\\\:r10\\\:').type('9123456789')
    cy.get('#\\\:r11\\\:').type('N'+generateString(5)+'@email.com')
    cy.get('#\\\:r12\\\:').type('https://google.com')
    cy.get('#\\\:r13\\\:').type('Narnia')
    cy.get('#\\\:r14\\\:').type('3000')
    cy.get('#\\\:r15\\\:').type('hogwarts city')
    cy.get('#\\\:r16\\\:').type('osaka')
    cy.get('#mui-component-select-region').click()
    cy.get('[data-value="Philippines"]').click()
    cy.get('#\\\:r17\\\:').click()
    cy.get('#\\\:r18\\\:').type('Nov is Handsome')
    cy.get('#\\\:r19\\\:').type('11')
    cy.get('#\\\:r1a\\\:').type('11')
    cy.get('#\\\:r1b\\\:').type('https://google.com')
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('#\\\:r1c\\\:').click()
    cy.get(':nth-child(5) > .MuiTypography-root').click()
    cy.wait(5000)
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.xpath("//img[@alt='Aria Logo']").should('exist')
    let email = cy.get('[name^="email"]')
    email.type('jace9029@gmail.com')
    let password = cy.get('[name^="password"]')
    password.type('password')
    cy.get('[type^="submit"]').click()
    cy.wait(5000)
    let secretPhrase = cy.get('[class^="MuiInputBase-input MuiInput-input mui-style-mnn31"]')
    secretPhrase.type('address bind tenant mean enemy finger anchor seat maid vintage near access brisk giraffe shuffle')
    cy.get('[class^="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation mui-style-1ld12uq"]').click()
    cy.wait(5000)
    cy.visit('https://wallet.test.myaria.network/dashboard/organizations')
    var accountName = cy.get('.MuiBox-root > .MuiTypography-root').invoke('text')
    accountName.should('eq', 'user custodian')
    var orgName = cy.xpath("//div[@title='Hospital 1']").invoke('text')
    orgName.should('eq', 'Hospital 1')
})

// it ('Create Organization',() =>{
    
// })    
    

    
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


it ('Logout', () =>{
    
})
    
// it ('Custodian Login', () =>{
    
// })
    

   // OrgName.should('include', 'Hospital 1')

    

    

    //cy.get('#\:r1c\:')

//})

