# Define a target named 'deploy'
deploy:
	git config --global --add safe.directory D:/coding/fkinSite/fkinSite/react/nepunePlace
	git config --global user.name "nepunePlace"
	git config --global user.email "raducea.matei2005@gmail.com"
	git add .
	git commit -m "aaaaa"
	git push
	npm run deploy
