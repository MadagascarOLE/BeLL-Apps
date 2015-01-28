# BeLL Apps README.md

## About
The BeLL Apps consist of a number of media players that revolve around an LMS at the center. This is the third iteration of the BeLL software. It's a Backbone.js app that caches itself in the browser that is backed by CouchDB.  We are currently targeting Firefox Mobile v27 for Android as the client browser.  [Click here to download the installable APK of Firefox Mobile v27 for Android](https://ftp.mozilla.org/pub/mozilla.org/mobile/releases/27.0/android/en-US/fennec-27.0.en-US.android-arm.apk).


## Prerequisite for installing Bell-App
To successfully install BellApp, one would need 4 things in a flash-drive
    1. node-v0.10.26-x86.msi
    2. setup-couchdb-1.5.0_R16B02.exe
    3. Bell-Apps (node install_windows curl)
    4. Data-Builder (run the script, launch-app.bat)

## Installing the BellApp
The build tool is created to install BeLLApp on all operating systems. The build tool sits inside the BellApp and assumes that the nodejs and the couchDB are installed prior to installing BellApp

	1) Ensure the nodejs and couchDB are installed and running. Go into BellApp folder and excecute the command,
			node install_windows http://X.X.X.X:5984/
			This should install the BellApp remotely to the CouchDB URL passed as the parameter.

	2) Open the firefox browser and verify the installation by launching the app at,
			http://X.X.X.X:5984/apps/_design/bell/MyApp/index.html

  	3) Load data into the BellApp (starter data)
			Go into the Data-Builder folder and run the script,
			launch-app.bat
			This opens starter data builder toolkit running at , http://localhost:3000/prepare-starter-data
			Select the BeLL servers you want to load resouces from and then select only necessary courses/resouces. Hit 'Prepare Starter Data' button below,
			This will copy the couch database files from seleted remote servers onto the location StarterDataLocation of your Bell-App, move these resources over to the next folder 'StarterData'
			This will create content for the installed Bell-App.


## How to's for Nation BeLL Administrators

### @todo Create a new Nation BeLL

###  @todo Create a Windows Installer from latest BeLL Apps tag, build a default content set using Data Builder,  use the resulting installer to install on a Community BeLL, and pair the new Community BeLL with a specific Nation BeLL

### Send a BeLL Apps update to Community BeLLs through a Nation BeLL
At the moment, Community BeLL codebases and National BeLL codebases are the same.
 So, to push a new update to Community BeLLs, the National BeLL codebase needs to be updated first and then the Community BeLLs can receive it.

- Create a code tag in the BeLL-Apps repository by running (from Mac or Linux probably)
`git clone git@github.com:open-learning-exchange/BeLL-Apps.git;`, then add a release note to `BeLL-Apps/app/CHANGELOG.txt`, then run ...
```
cd BeLL-Apps;
git add apps/CHANGELOG.txt;
git commit -m "Added CHANGELOG message for v0.12.3";
git push;
git tag v0.12.3;
git push --tags;
```
- Download the [tag's release from GitHub](https://github.com/open-learning-exchange/BeLL-Apps/tags) onto a Windows machine that has Node.js installed
- Unzip and run the file located at `/update_nation/update_nation_app.bat` with parameter of your target National BeLL's Couch URL. ex. `./update_nation_app.bat http://username:password@somaliabell.ole.org`
- Log into the BeLL Apps UI on the Natinal BeLL and change the version number in configuration screen. Log in, click "manager", click "configurations", there you will find "Version" field. Increment that number, and then click "Submit configurations".
- Log into BeLL Apps UI on Community BeLL with a user with role "super manager", this is probably your BeLL Admin user. On the Dashboard, look at the bottom and you will (hopefully) find an "Apply update" button.
- Verify on the community bell that we see a new version number and an code change by checking for the `CHANGELOG.txt` file for a matching tag number. You can chech this in your browser by going to`http://your-community-bell-url/apps/_design/bell/CHANGELOG.txt`.

### @todo Publish an Issue from a Nation BeLL, recieve that Issue from a Community BeLL, and inspect that new Issue on the Community BeLL by reading, watching, and rating resources

### @todo Community BeLL pushes activity data to a National BeLL
