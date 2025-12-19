import dotenv from 'dotenv';

let loaded=false;

export function loadEnv(): void {
    if(loaded) {
        return;
    }
    
    dotenv.config(); // load the env variables to process.env
    loaded = true;
}