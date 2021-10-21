node {    
    stage('Git') {
        git 'https://github.com/ReinaldoCS/connect-ssh'
    }

    stage('version') {
        sh 'npm -v'
        sh 'npx -v'
    }

    stage('Build') {
        sh 'npm install'        
    }

    stage('Npm Build') {        
            sh 'npx build'      
    }

    stage('Test') {
        sh 'npm start'       
    }   
}
