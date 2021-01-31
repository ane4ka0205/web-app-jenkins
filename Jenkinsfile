pipeline {
    agent any
    
		environment {
        DEPLOY_TO = 'test'
    }
    stages {
        stage('Build') {
			
            environment { 
				// profileName = 'test'
                app_tar = 'dniweb.tar'
                environment = 'test'
            }
            // when {
            //     allOf {
            //         branch 'test'
            //         // environment name: 'DEPLOY_TO', value: 'test'
            //     }
            // }
            steps {
                sh """echo "Build branch: ${environment} workspace: ${WORKSPACE}"
                echo "PATH=$PATH"
                pwd
                npm --version
                node --version
                npm install
                mkdir -p ${environment}
                rm -rf ${environment}/${app_tar}
                mkdir -p ./dist
                chmod 755 ./dist
                cd ./dist
                tar cvf ../${environment}/${app_tar} ./
                ls ${WORKSPACE}/${environment}"""
            }
        }
        stage('Unit Tests'){
            steps{
                sh """npm test"""
            }
        }
    }
}