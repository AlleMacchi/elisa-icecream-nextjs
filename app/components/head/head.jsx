import React from "react";
import Script from "next/script";

export default function Head(props) {
  return (
    <React.Fragment>
      <title>{props.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={props.content} />
      <link rel="alternate" hreflang="en-au" href={props.href} />
      <Script src={props.srcScript} />
      <Script
        type="text/javascript"
        src="data:text/javascript;base64,
LyogQWxsaSBBSSB3aWRnZXQgZm9yIGVsaXNhZ2VsYXRvLmNvbS5hdSAqLwooZnVuY3Rpb24gKHcsZCxzLG8sZixqcyxmanMpIHt3WydBbGxpSlNXaWRnZXQnXT1vO3dbb10gPSB3W29dIHx8IGZ1bmN0aW9uICgpIHsgKHdbb10ucSA9IHdbb10ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpIH07anMgPSBkLmNyZWF0ZUVsZW1lbnQocyksIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07anMuaWQgPSBvOyBqcy5zcmMgPSBmOyBqcy5hc3luYyA9IDE7IGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTt9KHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnYWxsaScsICdodHRwczovL3N0YXRpYy5hbGxpYWkuY29tL3dpZGdldC92MS5qcycpKTthbGxpKCdpbml0JywgJ3NpdGVfZlJTcVlwcUZ3cEdwY1ZkWCcpO2FsbGkoJ29wdGltaXplJywgJ2FsbCcpOw=="
      ></Script>
    </React.Fragment>
  );
}
