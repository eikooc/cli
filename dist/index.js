(()=>{"use strict";var e={350:function(e,t,i){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=r(i(87));const o=i(369);function issueCommand(e,t,i){const r=new Command(e,t,i);process.stdout.write(r.toString()+n.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const s="::";class Command{constructor(e,t,i){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=i}toString(){let e=s+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const i in this.properties){if(this.properties.hasOwnProperty(i)){const r=this.properties[i];if(r){if(t){t=false}else{e+=","}e+=`${i}=${escapeProperty(r)}`}}}}e+=`${s}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},24:function(e,t,i){var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(350);const s=i(466);const c=i(369);const a=n(i(87));const l=n(i(622));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const i=c.toCommandValue(t);process.env[e]=i;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${a.EOL}${i}${a.EOL}${t}`;s.issueCommand("ENV",r)}else{o.issueCommand("set-env",{name:e},i)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){s.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i){throw new Error(`Input required and not supplied: ${e}`)}return i.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+a.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,(function*(){startGroup(e);let i;try{i=yield t()}finally{endGroup()}return i}))}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},466:function(e,t,i){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=r(i(747));const o=r(i(87));const s=i(369);function issueCommand(e,t){const i=process.env[`GITHUB_${e}`];if(!i){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!n.existsSync(i)){throw new Error(`Missing file at path: ${i}`)}n.appendFileSync(i,`${s.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},369:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},423:function(e,t,i){var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=i(216);function exec(e,t,i){return r(this,void 0,void 0,(function*(){const r=n.argStringToArray(e);if(r.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const o=r[0];t=r.slice(1).concat(t||[]);const s=new n.ToolRunner(o,t,i);return s.exec()}))}t.exec=exec},216:function(e,t,i){var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=i(87);const o=i(614);const s=i(129);const c=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,i){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=i||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const i=this._getSpawnFileName();const r=this._getSpawnArgs(e);let n=t?"":"[command]";if(c){if(this._isCmdFile()){n+=i;for(const e of r){n+=` ${e}`}}else if(e.windowsVerbatimArguments){n+=`"${i}"`;for(const e of r){n+=` ${e}`}}else{n+=this._windowsQuoteCmdArg(i);for(const e of r){n+=` ${this._windowsQuoteCmdArg(e)}`}}}else{n+=i;for(const e of r){n+=` ${e}`}}return n}_processLineBuffer(e,t,i){try{let r=t+e.toString();let o=r.indexOf(n.EOL);while(o>-1){const e=r.substring(0,o);i(e);r=r.substring(o+n.EOL.length);o=r.indexOf(n.EOL)}t=r}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(c){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(c){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const i of this.args){t+=" ";t+=e.windowsVerbatimArguments?i:this._windowsQuoteCmdArg(i)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let i=false;for(const r of e){if(t.some((e=>e===r))){i=true;break}}if(!i){return e}let r='"';let n=true;for(let t=e.length;t>0;t--){r+=e[t-1];if(n&&e[t-1]==="\\"){r+="\\"}else if(e[t-1]==='"'){n=true;r+='"'}else{n=false}}r+='"';return r.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let i=true;for(let r=e.length;r>0;r--){t+=e[r-1];if(i&&e[r-1]==="\\"){t+="\\"}else if(e[r-1]==='"'){i=true;t+="\\"}else{i=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const i={};i.cwd=e.cwd;i.env=e.env;i["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){i.argv0=`"${t}"`}return i}exec(){return r(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const i=this._cloneExecOptions(this.options);if(!i.silent&&i.outStream){i.outStream.write(this._getCommandString(i)+n.EOL)}const r=new ExecState(i,this.toolPath);r.on("debug",(e=>{this._debug(e)}));const o=this._getSpawnFileName();const c=s.spawn(o,this._getSpawnArgs(i),this._getSpawnOptions(this.options,o));const a="";if(c.stdout){c.stdout.on("data",(e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!i.silent&&i.outStream){i.outStream.write(e)}this._processLineBuffer(e,a,(e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}}))}))}const l="";if(c.stderr){c.stderr.on("data",(e=>{r.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!i.silent&&i.errStream&&i.outStream){const t=i.failOnStdErr?i.errStream:i.outStream;t.write(e)}this._processLineBuffer(e,l,(e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}}))}))}c.on("error",(e=>{r.processError=e.message;r.processExited=true;r.processClosed=true;r.CheckComplete()}));c.on("exit",(e=>{r.processExitCode=e;r.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);r.CheckComplete()}));c.on("close",(e=>{r.processExitCode=e;r.processExited=true;r.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);r.CheckComplete()}));r.on("done",((i,r)=>{if(a.length>0){this.emit("stdline",a)}if(l.length>0){this.emit("errline",l)}c.removeAllListeners();if(i){t(i)}else{e(r)}}))}))}))}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let i=false;let r=false;let n="";function append(e){if(r&&e!=='"'){n+="\\"}n+=e;r=false}for(let o=0;o<e.length;o++){const s=e.charAt(o);if(s==='"'){if(!r){i=!i}else{append(s)}continue}if(s==="\\"&&r){append(s);continue}if(s==="\\"&&i){r=true;continue}if(s===" "&&!i){if(n.length>0){t.push(n);n=""}continue}append(s)}if(n.length>0){t.push(n.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},120:function(e,t,i){var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};var n;Object.defineProperty(t,"__esModule",{value:true});const o=i(357);const s=i(747);const c=i(622);n=s.promises,t.chmod=n.chmod,t.copyFile=n.copyFile,t.lstat=n.lstat,t.mkdir=n.mkdir,t.readdir=n.readdir,t.readlink=n.readlink,t.rename=n.rename,t.rmdir=n.rmdir,t.stat=n.stat,t.symlink=n.symlink,t.unlink=n.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return r(this,void 0,void 0,(function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true}))}t.exists=exists;function isDirectory(e,i=false){return r(this,void 0,void 0,(function*(){const r=i?yield t.stat(e):yield t.lstat(e);return r.isDirectory()}))}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,i=1e3,n=1){return r(this,void 0,void 0,(function*(){o.ok(e,"a path argument must be provided");e=c.resolve(e);if(n>=i)return t.mkdir(e);try{yield t.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield mkdirP(c.dirname(e),i,n+1);yield t.mkdir(e);return}default:{let i;try{i=yield t.stat(e)}catch(e){throw r}if(!i.isDirectory())throw r}}}}))}t.mkdirP=mkdirP;function tryGetExecutablePath(e,i){return r(this,void 0,void 0,(function*(){let r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(i.some((e=>e.toUpperCase()===t))){return e}}else{if(isUnixExecutable(r)){return e}}}const n=e;for(const o of i){e=n+o;r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){try{const i=c.dirname(e);const r=c.basename(e).toUpperCase();for(const n of yield t.readdir(i)){if(r===n.toUpperCase()){e=c.join(i,n);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(r)){return e}}}}return""}))}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},202:function(e,t,i){var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=i(129);const o=i(622);const s=i(669);const c=i(120);const a=s.promisify(n.exec);function cp(e,t,i={}){return r(this,void 0,void 0,(function*(){const{force:r,recursive:n}=readCopyOptions(i);const s=(yield c.exists(t))?yield c.stat(t):null;if(s&&s.isFile()&&!r){return}const a=s&&s.isDirectory()?o.join(t,o.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield c.stat(e);if(l.isDirectory()){if(!n){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,a,0,r)}}else{if(o.relative(e,a)===""){throw new Error(`'${a}' and '${e}' are the same file`)}yield copyFile(e,a,r)}}))}t.cp=cp;function mv(e,t,i={}){return r(this,void 0,void 0,(function*(){if(yield c.exists(t)){let r=true;if(yield c.isDirectory(t)){t=o.join(t,o.basename(e));r=yield c.exists(t)}if(r){if(i.force==null||i.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(o.dirname(t));yield c.rename(e,t)}))}t.mv=mv;function rmRF(e){return r(this,void 0,void 0,(function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield a(`rd /s /q "${e}"`)}else{yield a(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield a(`rm -rf "${e}"`)}else{yield c.unlink(e)}}}))}t.rmRF=rmRF;function mkdirP(e){return r(this,void 0,void 0,(function*(){yield c.mkdirP(e)}))}t.mkdirP=mkdirP;function which(e,t){return r(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(c.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(o.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const i=yield c.tryGetExecutablePath(e,t);if(i){return i}return""}if(e.includes("/")||c.IS_WINDOWS&&e.includes("\\")){return""}const i=[];if(process.env.PATH){for(const e of process.env.PATH.split(o.delimiter)){if(e){i.push(e)}}}for(const r of i){const i=yield c.tryGetExecutablePath(r+o.sep+e,t);if(i){return i}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}}))}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const i=Boolean(e.recursive);return{force:t,recursive:i}}function cpDirRecursive(e,t,i,n){return r(this,void 0,void 0,(function*(){if(i>=255)return;i++;yield mkdirP(t);const r=yield c.readdir(e);for(const o of r){const r=`${e}/${o}`;const s=`${t}/${o}`;const a=yield c.lstat(r);if(a.isDirectory()){yield cpDirRecursive(r,s,i,n)}else{yield copyFile(r,s,n)}}yield c.chmod(t,(yield c.stat(e)).mode)}))}function copyFile(e,t,i){return r(this,void 0,void 0,(function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const i=yield c.readlink(e);yield c.symlink(i,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||i){yield c.copyFile(e,t)}}))}},974:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){if(r===undefined)r=i;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[i]}})}:function(e,t,i,r){if(r===undefined)r=i;e[r]=t[i]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(i!=="default"&&Object.hasOwnProperty.call(e,i))r(t,e,i);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.run=void 0;const c=o(i(24));const a=o(i(423));const l=o(i(202));const u=o(i(87));const d=o(i(622));const f=i(669);const p=f.promisify(i(129).exec);const h=i(77);const m=`Starting script execution via docker image mcr.microsoft.com/azure-cli:`;const v=`bash --noprofile --norc -e `;const _="/github/workspace";const y="/_temp";const g="agentazcliversion";t.run=()=>s(void 0,void 0,void 0,(function*(){var e="";const t=`MICROSOFT_AZURE_CLI_${h.getCurrentTime()}_CONTAINER`;try{if(process.env.RUNNER_OS!="Linux"){c.setFailed("Please use Linux based OS as a runner.");return}let i=c.getInput("inlineScript",{required:true});let r=c.getInput("azcliversion",{required:false}).trim().toLowerCase();if(r==g){const{stdout:e,stderr:t}=yield p("az version");if(!t){try{r=JSON.parse(e)["azure-cli"]}catch(e){console.log("Failed to fetch az cli version from agent. Reverting back to latest.");r="latest"}}else{console.log("Failed to fetch az cli version from agent. Reverting back to latest.");r="latest"}}if(!(yield checkIfValidCLIVersion(r))){c.setFailed("Please enter a valid azure cli version. \nSee available versions: https://github.com/Azure/azure-cli/releases.");throw new Error("Please enter a valid azure cli version. \nSee available versions: https://github.com/Azure/azure-cli/releases.")}if(!i.trim()){c.setFailed("Please enter a valid script.");throw new Error("Please enter a valid script.")}i=` set -e >&2; echo '${m}' >&2; ${i}`;e=yield h.createScriptFile(i);let n=` ${v}${y}/${e} `;let o="";for(let e in process.env){if(!h.checkIfEnvironmentVariableIsOmitted(e)&&process.env[e]){o+=` -e "${e}=${process.env[e]}" `}}let s=d.relative(h.TEMP_DIRECTORY,process.env.GITHUB_ENV);const a=d.resolve(y,s);let l=`run --workdir ${_} -v ${process.env.GITHUB_WORKSPACE}:${_} `;l+=` -v ${process.env.HOME}/.azure:/root/.azure -v ${h.TEMP_DIRECTORY}:${y} `;l+=` ${o} `;l+=`-e GITHUB_WORKSPACE=${_} `;l+=`-e GITHUB_ENV=${a} `;l+=`--name ${t} `;l+=` mcr.microsoft.com/azure-cli:${r} ${n}`;console.log(`${m}${r}`);yield executeDockerCommand(l);console.log("az script ran successfully.")}catch(e){c.error(e);c.setFailed(e.stderr);throw e}finally{const i=d.join(h.TEMP_DIRECTORY,e);yield h.deleteFile(i);console.log("cleaning up container...");yield executeDockerCommand(` container rm --force ${t} `,true)}}));const checkIfValidCLIVersion=e=>s(void 0,void 0,void 0,(function*(){const t=yield getAllAzCliVersions();if(!t||t.length==0){return true}return t.some((t=>t.toLowerCase()===e))}));const getAllAzCliVersions=()=>s(void 0,void 0,void 0,(function*(){var e="";var t={outStream:new h.NullOutstreamStringWritable({decodeStrings:false}),listeners:{stdout:t=>e+=t.toString()+u.EOL}};try{yield a.exec(`curl --location -s https://mcr.microsoft.com/v2/azure-cli/tags/list`,[],t);if(e&&JSON.parse(e).tags){return JSON.parse(e).tags}}catch(t){c.warning(`Unable to fetch all az cli versions, please report it as an issue on https://github.com/Azure/CLI/issues. Output: ${e}, Error: ${t}`)}return[]}));const executeDockerCommand=(e,t=false)=>s(void 0,void 0,void 0,(function*(){const i=yield l.which("docker",true);var r="";var n=false;var o={outStream:new h.NullOutstreamStringWritable({decodeStrings:false}),listeners:{stdout:e=>console.log(e.toString()),errline:e=>{if(!n){r+=e+u.EOL}else{console.log(e)}if(e.trim()===m){n=true;r=""}}}};var s;try{s=yield a.exec(`"${i}" ${e}`,[],o)}catch(e){if(!t){throw e}c.warning(e)}finally{if(s!==0&&!t){throw new Error(r||"az cli script failed.")}c.warning(r)}}));t.run()},77:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){if(r===undefined)r=i;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[i]}})}:function(e,t,i,r){if(r===undefined)r=i;e[r]=t[i]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(i!=="default"&&Object.hasOwnProperty.call(e,i))r(t,e,i);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function fulfilled(e){try{step(r.next(e))}catch(e){n(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){n(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.checkIfEnvironmentVariableIsOmitted=t.NullOutstreamStringWritable=t.getCurrentTime=t.giveExecutablePermissionsToFile=t.deleteFile=t.createScriptFile=t.TEMP_DIRECTORY=void 0;const c=i(413);const a=o(i(423));const l=o(i(24));const u=o(i(622));const d=o(i(87));const f=o(i(747));t.TEMP_DIRECTORY=process.env.RUNNER_TEMP||d.tmpdir();t.createScriptFile=e=>s(void 0,void 0,void 0,(function*(){const i=`AZ_CLI_GITHUB_ACTION_${t.getCurrentTime().toString()}.sh`;const r=u.join(t.TEMP_DIRECTORY,i);f.writeFileSync(r,`${e}`);yield t.giveExecutablePermissionsToFile(r);return i}));t.deleteFile=e=>s(void 0,void 0,void 0,(function*(){if(f.existsSync(e)){try{f.unlinkSync(e)}catch(e){l.warning(e.toString())}}}));t.giveExecutablePermissionsToFile=e=>s(void 0,void 0,void 0,(function*(){return yield a.exec(`chmod +x ${e}`,[],{silent:true})}));t.getCurrentTime=()=>(new Date).getTime();class NullOutstreamStringWritable extends c.Writable{constructor(e){super(e)}_write(e,t,i){if(i){i()}}}t.NullOutstreamStringWritable=NullOutstreamStringWritable;t.checkIfEnvironmentVariableIsOmitted=e=>{const t=["LANG","HOSTNAME","PWD","HOME","PYTHON_VERSION","PYTHON_PIP_VERSION","SHLVL","PATH","GPG_KEY","CONDA","AGENT_TOOLSDIRECTORY","GITHUB_WORKSPACE","GITHUB_ENV","RUNNER_PERFLOG","RUNNER_WORKSPACE","RUNNER_TEMP","RUNNER_TRACKING_ID","RUNNER_TOOL_CACHE","DOTNET_SKIP_FIRST_TIME_EXPERIENCE","JOURNAL_STREAM","DEPLOYMENT_BASEPATH","VCPKG_INSTALLATION_ROOT","PERFLOG_LOCATION_SETTING"];const i=["JAVA_","LEIN_","M2_","BOOST_","GOROOT","ANDROID_","GRADLE_","ANT_","CHROME","SELENIUM_","INPUT_"];for(let i=0;i<t.length;i++){if(t[i]===e.toUpperCase()){return true}}return i.some((t=>e.toUpperCase().startsWith(t)))}},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},614:e=>{e.exports=require("events")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},413:e=>{e.exports=require("stream")},669:e=>{e.exports=require("util")}};var t={};function __nccwpck_require__(i){var r=t[i];if(r!==undefined){return r.exports}var n=t[i]={exports:{}};var o=true;try{e[i].call(n.exports,n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete t[i]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var i=__nccwpck_require__(974);module.exports=i})();