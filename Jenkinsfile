pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            when {
                branch 'main2'
            }
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            when {
                branch 'main2'
            }
            environment {
                VERCEL_TOKEN = credentials('vercel-token')
            }
            steps {
                bat 'npm install -g vercel'
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN% --name=ci-cd-demo'
            }
        }
    }
    post {
        failure {
            echo "❌ Pipeline failed!"
        }
        success {
            echo "✅ Pipeline successful!"
        }
    }
}
