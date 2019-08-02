1. Currently getting this error in the terminal when I try to load server.js:
PS C:\Users\theClubhou.se\Desktop\code\Application> node server.js
Listening on Port:8080
(node:15276) UnhandledPromiseRejectionWarning: Error: getaddrinfo ENOTFOUND locacalhost locacalhost:3306
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:56:26)
    --------------------
    at Protocol._enqueue (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:119:18)
    at Connection._implyConnect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:457:10)
    at Connection.query (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:199:8) 
    at Promise (C:\Users\theClubhou.se\Desktop\code\Application\db.js:26:17)
    at new Promise (<anonymous>)
    at getResults (C:\Users\theClubhou.se\Desktop\code\Application\db.js:25:12)
    at Object.<anonymous> (C:\Users\theClubhou.se\Desktop\code\Application\db.js:32:1)
(node:15276) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:15276) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

2. Also getting the same error when I try to load db.js:
PS C:\Users\theClubhou.se\Desktop\code\Application> node db.js
(node:15204) UnhandledPromiseRejectionWarning: Error: getaddrinfo ENOTFOUND locacalhost locacalhost:3306
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:56:26)
    --------------------
    at Protocol._enqueue (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:119:18)
    at Connection._implyConnect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:457:10)
    at Connection.query (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:199:8) 
    at Promise (C:\Users\theClubhou.se\Desktop\code\Application\db.js:26:17)
    at new Promise (<anonymous>)
    at getResults (C:\Users\theClubhou.se\Desktop\code\Application\db.js:25:12)
    at Object.<anonymous> (C:\Users\theClubhou.se\Desktop\code\Application\db.js:32:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
(node:15204) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which 
was not handled with .catch(). (rejection id: 1)
(node:15204) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
- Changed the host: to localhost in db.js

3. Now getting this error when trying to load server.js:
PS C:\Users\theClubhou.se\Desktop\code\Application> node server.js
Listening on Port:8080
(node:9888) UnhandledPromiseRejectionWarning: Error: ER_ACCESS_DENIED_ERROR: Access denied for user 
'root'@'localhost' (using password: YES)
    at Handshake.Sequence._packetToError (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
    at Handshake.ErrorPacket (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\sequences\Handshake.js:123:18)
    at Protocol._parsePacket (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:291:23)
    at Parser._parsePacket (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Parser.js:433:10)
    at Parser.write (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Parser.js:43:10)    at Protocol.write (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:38:16)
    at Socket.<anonymous> (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:91:28)
    at Socket.<anonymous> (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:525:10)
    at Socket.emit (events.js:198:13)
    at addChunk (_stream_readable.js:288:12)
    --------------------
    at Protocol._enqueue (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:119:18)
    at Connection._implyConnect (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:457:10)
    at Connection.query (C:\Users\theClubhou.se\Desktop\node_modules\mysql\lib\Connection.js:199:8) 
    at Promise (C:\Users\theClubhou.se\Desktop\code\Application\db.js:20:17)
    at new Promise (<anonymous>)
    at getResults (C:\Users\theClubhou.se\Desktop\code\Application\db.js:19:12)
    at Object.<anonymous> (C:\Users\theClubhou.se\Desktop\code\Application\db.js:26:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
(node:9888) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:9888) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

4. Tried to alter the user with the format from Melva on Slack Channel: 
PS C:\Users\theClubhou.se\Desktop\code\Application> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'At line:1 char:20
+ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password B ...
+                    ~
No characters are allowed after a here-string header but before the end of the line.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : UnexpectedCharactersAfterHereStringHeader