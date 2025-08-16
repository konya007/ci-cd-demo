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
        stage('Deploy') {
            when {
                branch 'main2'
            }
            steps {
                // Thực hiện các bước deploy, ví dụ:
                bat 'echo Deploying to production...'
                // Thay bằng lệnh deploy thực tế của bạn, ví dụ copy file, chạy script, v.v.
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
