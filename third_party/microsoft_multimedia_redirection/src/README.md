\# Multimedia Redirection API



Multimedia redirection is an optional component that can be included on Windows virtual machines.  When this component is available, applications can use the multimedia redirection API in this repo to redirect audio and video playback from the virtual machine to the client.  This makes applications more VM-friendly, saving resources on the VM and improving video playback quality.



\## How to use



The multimedia redirection API is exposed as a set of COM objects.  Include the multimedia redirection header in your application to define the factory CLSID and interfaces.



Use CoCreateInstance for CLSID\_RedirectorFactory to create the initial factory object.  This also serves as a means of detection if the multimedia redirection components are available - if CoCreateInstance fails, then the multimedia redirection components are not installed on the system.  This is the expected case for most systems, as multimedia redirection is installed on virtual machines that are primarily accessed remotely.



An MMR "session" is an instance of video or audio playback that gets redirected to a remote device.  An application can interact with a session in two different ways.  If the application already supports openscreen (https://w3c.github.io/openscreenprotocol/), it can send raw openscreen messages over an MMR session.  If an application does not support openscreen, it can use the more detailed session APIs to control remote playback.



With many video remoting technologies, the location and way that the video is rendered on the remote machine is not a concern.  It is very important for multimedia redirection, however, which seamlessly integrates the video with the application as if the video were rendered locally.  For this to happen properly, the application must use the SetVideoRect call to inform multimedia redirection of where the video is intended to be placed, and also render the image from GetVideoReplacementImage in place of where the video would have been rendered locally.



\## Structure



api\\ - contains the API IDL and header.  Changes to these files must be binary compatible.  Changing an existing interface breaks

compatibility with existing apps.



samples\\ - contains samples demonstrating how to use the multimedia redirection API

samples\\SimpleStreamer\\ - Win32 sample app that generates mock audio/video, encodes with Media Foundation, streams through MMR, uses
SetVideoRect/GetVideoReplacementImage for visual integration, and exposes play/pause + seek controls



\## Contributing



This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.



When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.



This project has adopted the \[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the \[Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact \[opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.



\## Trademarks



This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow \[Microsoft's Trademark \& Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party's policies.

