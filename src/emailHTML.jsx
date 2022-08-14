const EmailHTML = {
     // Map `h1` (`# heading`) to use `h2`s.
     // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.

     h1: ({node, ...props}) => <h1 style={{lineHeight: 1.5, fontFamily:"source sans pro,helvetica,arial", color:"#000000"}} {...props} />,


     h2: ({node, ...props}) => <h2 style={{lineHeight: 1.5, fontFamily:"source sans pro,helvetica,arial", color:"#000000"}} {...props} />,

     p: ({node, ...props}) => <p style={{lineHeight: 1.5, fontSize:"15px", fontFamily:"source sans pro,helvetica,arial", color:"#000000"}} {...props} />,


      a: ({node, ...props}) => <a  target="_blank" style={{lineHeight: 1.5, fontWeight:"bold", color:"#006F74"}} {...props} />,

      img: ({node, ...props}) => <img  target="_blank" style={{width:"100%", borderRadius:"5px", marginBottom:"20px", marginTop:"10px"}} {...props} />,


      hr :({node, ...props}) => `<table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100% !important;">
      <tr>
          <td align="left" valign="top" width="600px" height="1" style="background-color: #adadb1; border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-line-height-rule: exactly; line-height: 1px;"><!--[if gte mso 15]>&nbsp;<![endif]--></td>
      </tr>
  </table>`



   }


export default EmailHTML;


