# Slack Clone Hack2Hire
- So incase anyone is facing difficulty in installing the dependencies. 
- Try Win+X which will raise a side bar menu from which you can select the Terminal(Administrator) and open it.
- Upon opening the powershell you can type in `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`
- Was facing the following discrepancies while installing npx env 
```terminal
PS C:\Users\ASUS\OneDrive\Desktop\PeerLoop> npx create-react-app slack-clone-youtube --template redux
>> 
npm error code ENOENT
npm error syscall lstat
npm error path C:\Users\ASUS\AppData\Roaming\npm
npm error errno -4058
npm error enoent ENOENT: no such file or directory, lstat 'C:\Users\ASUS\AppData\Roaming\npm'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: C:\Users\ASUS\AppData\Local\npm-cache\_logs\2024-11-08T20_23_26_966Z-debug-0.log
PS C:\Users\ASUS\OneDrive\Desktop\PeerLoop> cd slack-clone-youtube
>>
cd : Cannot find path 'C:\Users\ASUS\OneDrive\Desktop\PeerLoop\slack-clone-youtube' because it does not exist.
At line:1 char:1
+ cd slack-clone-youtube
+ ~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\ASUS\O...k-clone-youtube:String) [Set-Location], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand

PS C:\Users\ASUS\OneDrive\Desktop\PeerLoop> npm cache clean --force
>>
npm warn using --force Recommended protections disabled.
```