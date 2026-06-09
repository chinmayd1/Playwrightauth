import { test as setup } from '@playwright/test'
import user from '../.auth/user.json'
import fs from 'fs'

const authFile = '.auth/user.json'
setup('authentication', async ({ page,request }) => {
    // const reponsePromise = page.waitForResponse(response => response.url().includes('api/tags') && response.status() == 200);
    // await page.goto('https://conduit.bondaracademy.com/')
    // await page.getByText('Sign in').click()
    // await page.locator('[type="text"]').fill("minskoleopc@gmail.com")
    // await page.locator('[type="password"]').fill("minskole123")
    // await page.locator('button').click()
    // await reponsePromise
    // await page.context().storageState({path:authFile});

    await request.post('https://conduit-api.bondaracademy.com/api/users/login',{
        data:{
            "user":{"email":"minskoleopc@gmail.com","password":"minskole123"}
        }
    })


})