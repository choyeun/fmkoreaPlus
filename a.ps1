# a.ps1

# 버전 전달 받기
param (
    [string]$version
)

# 버전 출력
Write-Host "Version: $version"

# Git 명령 실행
git add .
git commit -m "$version"
git push
