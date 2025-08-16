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
                branch 'main'
            }
            steps {
                bat 'npm run build'
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
