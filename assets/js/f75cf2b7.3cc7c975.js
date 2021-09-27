"use strict";(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?o.createElement(p,a(a({ref:t},c),{},{components:n})):o.createElement(p,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5905:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>d});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a={},s="@nx-dotnet/core:test",l={unversionedId:"core/executors/test",id:"core/executors/test",isDocsHomePage:!1,title:"@nx-dotnet/core:test",description:"NxDotnet Test Executor",source:"@site/../../docs/core/executors/test.md",sourceDirName:"core/executors",slug:"/core/executors/test",permalink:"/docs/core/executors/test",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/executors/test.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"@nx-dotnet/core:serve",permalink:"/docs/core/executors/serve"},next:{title:"@nx-dotnet/core:app",permalink:"/docs/core/generators/app"}},u=[{value:"NxDotnet Test Executor",id:"nxdotnet-test-executor",children:[]},{value:"Options",id:"options",children:[{value:"testAdapterPath",id:"testadapterpath",children:[]},{value:"blame",id:"blame",children:[]},{value:"blameCrash",id:"blamecrash",children:[]},{value:"blameCrashDumpType",id:"blamecrashdumptype",children:[]},{value:"blameCrashCollectAlways",id:"blamecrashcollectalways",children:[]},{value:"blameHang",id:"blamehang",children:[]},{value:"blameHangDumpType",id:"blamehangdumptype",children:[]},{value:"blameHangTimeout",id:"blamehangtimeout",children:[]},{value:"configuration",id:"configuration",children:[]},{value:"collect",id:"collect",children:[]},{value:"diag",id:"diag",children:[]},{value:"framework",id:"framework",children:[]},{value:"filter",id:"filter",children:[]},{value:"logger",id:"logger",children:[]},{value:"noBuild",id:"nobuild",children:[]},{value:"noRestore",id:"norestore",children:[]},{value:"output",id:"output",children:[]},{value:"resultsDirectory",id:"resultsdirectory",children:[]},{value:"runtime",id:"runtime",children:[]},{value:"settings",id:"settings",children:[]},{value:"listTests",id:"listtests",children:[]},{value:"verbosity",id:"verbosity",children:[]},{value:"watch",id:"watch",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nx-dotnetcoretest"},"@nx-dotnet/core:test"),(0,i.kt)("h2",{id:"nxdotnet-test-executor"},"NxDotnet Test Executor"),(0,i.kt)("p",null,"Runs test via the dotnet cli"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"testadapterpath"},"testAdapterPath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Path to a directory to be searched for additional test adapters. Only .dll files with suffix .TestAdapter.dll are inspected. If not specified, the directory of the test .dll is searched.")),(0,i.kt)("h3",{id:"blame"},"blame"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Runs the tests in blame mode. This option is helpful in isolating problematic tests that cause the test host to crash. When a crash is detected, it creates a sequence file in TestResults/","<","Guid",">","/","<","Guid",">","_","Sequence.xml that captures the order of tests that were run before the crash.")),(0,i.kt)("h3",{id:"blamecrash"},"blameCrash"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Runs the tests in blame mode and collects a crash dump when the test host exits unexpectedly. This option depends on the version of .NET used, the type of error, and the operating system. For exceptions in managed code, a dump will be automatically collected on .NET 5.0 and later versions. It will generate a dump for testhost or any child process that also ran on .NET 5.0 and crashed. Crashes in native code will not generate a dump. This option works on Windows, macOS, and Linux. Crash dumps in native code, or when using .NET Core 3.1 or earlier versions, can only be collected on Windows, by using Procdump. A directory that contains procdump.exe and procdump64.exe must be in the PATH or PROCDUMP_PATH environment variable. Download the tools. Implies --blame. To collect a crash dump from a native application running on .NET 5.0 or later, the usage of Procdump can be forced by setting the VSTEST_DUMP_FORCEPROCDUMP environment variable to 1.")),(0,i.kt)("h3",{id:"blamecrashdumptype"},"blameCrashDumpType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The type of crash dump to be collected. Implies --blame-crash.")),(0,i.kt)("h3",{id:"blamecrashcollectalways"},"blameCrashCollectAlways"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Collects a crash dump on expected as well as unexpected test host exit.")),(0,i.kt)("h3",{id:"blamehang"},"blameHang"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Run the tests in blame mode and collects a hang dump when a test exceeds the given timeout.")),(0,i.kt)("h3",{id:"blamehangdumptype"},"blameHangDumpType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The type of crash dump to be collected. It should be full, mini, or none. When none is specified, test host is terminated on timeout, but no dump is collected. Implies --blame-hang.")),(0,i.kt)("h3",{id:"blamehangtimeout"},"blameHangTimeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Per-test timeout, after which a hang dump is triggered and the test host process and all of its child processes are dumped and terminated. The timeout value is specified in one of the following formats:\n1.5h, 1.5hour, 1.5hours\n90m, 90min, 90minute, 90minutes\n5400s, 5400sec, 5400second, 5400seconds\n5400000ms, 5400000mil, 5400000millisecond, 5400000milliseconds\nWhen no unit is used (for example, 5400000), the value is assumed to be in milliseconds. When used together with data driven tests, the timeout behavior depends on the test adapter used. For xUnit and NUnit the timeout is renewed after every test case. For MSTest, the timeout is used for all test cases. This option is supported on Windows with netcoreapp2.1 and later, on Linux with netcoreapp3.1 and later, and on macOS with net5.0 or later. Implies --blame and --blame-hang.")),(0,i.kt)("h3",{id:"configuration"},"configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Defines the build configuration. The default value is Debug, but your project","'","s configuration could override this default SDK setting.")),(0,i.kt)("h3",{id:"collect"},"collect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Enables data collector for the test run. For more information, see Monitor and analyze test run.\nTo collect code coverage on any platform that is supported by .NET Core, install Coverlet and use the --collect:",'"',"XPlat Code Coverage",'"'," option.\nOn Windows, you can collect code coverage by using the --collect ",'"',"Code Coverage",'"'," option. This option generates a .coverage file, which can be opened in Visual Studio 2019 Enterprise. For more information, see Use code coverage and Customize code coverage analysis.")),(0,i.kt)("h3",{id:"diag"},"diag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Enables diagnostic mode for the test platform and writes diagnostic messages to the specified file and to files next to it. The process that is logging the messages determines which files are created, such as ",(0,i.kt)("em",{parentName:"li"},".host","_","<","date",">",".txt for test host log, and "),".datacollector","_","<","date",">",".txt for data collector log.")),(0,i.kt)("h3",{id:"framework"},"framework"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Forces the use of dotnet or .NET Framework test host for the test binaries. This option only determines which type of host to use. The actual framework version to be used is determined by the runtimeconfig.json of the test project. When not specified, the TargetFramework assembly attribute is used to determine the type of host. When that attribute is stripped from the .dll, the .NET Framework host is used.")),(0,i.kt)("h3",{id:"filter"},"filter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Filters out tests in the current project using the given expression. For more information, see the Filter option details section. For more information and examples on how to use selective unit test filtering, see Running selective unit tests.")),(0,i.kt)("h3",{id:"logger"},"logger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Specifies a logger for test results. Unlike MSBuild, dotnet test doesn","'","t accept abbreviations: instead of -l ",'"',"console;v=d",'"'," use -l ",'"',"console;verbosity=detailed",'"',". Specify the parameter multiple times to enable multiple loggers.")),(0,i.kt)("h3",{id:"nobuild"},"noBuild"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Doesn","'","t build the test project before running it. It also implicitly sets the - --no-restore flag.")),(0,i.kt)("h3",{id:"norestore"},"noRestore"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Doesn","'","t execute an implicit restore when running the command.")),(0,i.kt)("h3",{id:"output"},"output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Directory in which to find the binaries to run. If not specified, the default path is ./bin/","<","configuration",">","/","<","framework",">","/. For projects with multiple target frameworks (via the TargetFrameworks property), you also need to define --framework when you specify this option. dotnet test always runs tests from the output directory. You can use AppDomain.BaseDirectory to consume test assets in the output directory.")),(0,i.kt)("h3",{id:"resultsdirectory"},"resultsDirectory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The directory where the test results are going to be placed. If the specified directory doesn","'","t exist, it","'","s created. The default is TestResults in the directory that contains the project file.")),(0,i.kt)("h3",{id:"runtime"},"runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The target runtime to test for.")),(0,i.kt)("h3",{id:"settings"},"settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The .runsettings file to use for running the tests. The TargetPlatform element (x86|x64) has no effect for dotnet test. To run tests that target x86, install the x86 version of .NET Core. The bitness of the dotnet.exe that is on the path is what will be used for running tests. For more information, see the following resources:")),(0,i.kt)("h3",{id:"listtests"},"listTests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): List the discovered tests instead of running the tests.")),(0,i.kt)("h3",{id:"verbosity"},"verbosity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Sets the verbosity level of the command. For more information, see LoggerVerbosity.")),(0,i.kt)("h3",{id:"watch"},"watch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Determines if ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet test")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet watch test")," is used to execute tests.")))}d.isMDXComponent=!0}}]);