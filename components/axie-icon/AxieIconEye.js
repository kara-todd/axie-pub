import React from 'react';

const AxieIconEye = ({ cls }) => {
  const classType = cls.toLowerCase();

  return (
    <g fill="none">
      <path
        fill="#FFF"
        d="M13.922 14.49c.018-.624-.306-1.038-.994-1.264-.069 0-.137-.01-.205-.008-1.06.01-1.919.427-2.494 1.32-.447.695-.145 1.387.652 1.593a2.568 2.568 0 001.771-.182c.312-.23.64-.44.93-.694.217-.195.341-.474.34-.766z"
      ></path>
      <path
        fill={`var(--color-${classType}-light)`}
        d="M27.043 14.241a18.56 18.56 0 00-2.658-2.638c-1.028-.823-2.094-1.6-3.143-2.398-.098-.077-.196-.147-.296-.223.275-.29.549-.549.789-.84.545-.652.722-1.42.64-2.251-.036-.365-.24-.59-.606-.647a2.09 2.09 0 00-.68.007c-.855.159-1.655.474-2.341 1.015-.302.239-.547.55-.834.841l-1.682-.746c-.04-.306-.066-.651-.134-.986a6.831 6.831 0 00-.611-1.72 2.25 2.25 0 00-.543-.692h-.413a2.769 2.769 0 00-1.343 1.371c-.391.821-.618 1.682-.517 2.617l-1.01.68c-.068-.102-.136-.201-.2-.305-.573-.911-1.42-1.448-2.43-1.736-.515-.147-.905.067-1.1.565a2.758 2.758 0 00-.168.731c-.121 1.24.123 2.37 1.006 3.309a.59.59 0 01.056.09c-.358.435-.72.861-1.07 1.3a26.092 26.092 0 00-2.676 4.073c-.367.703-.689 1.42-.862 2.197-.009.048-.069.095-.069.136V19.3c0 .013.04.025.044.041.173.912.72 1.62 1.256 2.337 1.154 1.544 2.562 2.841 3.999 4.11.99.889 2.05 1.697 3.17 2.414.48.311.987.578 1.515.797 1.306.523 2.566.31 3.76-.37a5.92 5.92 0 00.925-.654c2.46-2.127 4.777-4.395 6.735-7.004.468-.623.912-1.264 1.33-1.921.43-.653.728-1.382.877-2.149.182-1.003-.068-1.88-.716-2.659zm-8.793-5.31c0-1.35.754-2.357 2.09-2.766.294-.094.596-.163.901-.207.383-.053.543.123.45.502a2.258 2.258 0 01-.273.66 7.008 7.008 0 01-2.505 2.35l-.06.033c-.423.207-.578.114-.602-.366l.002-.206h-.003zm-4.167-4.664c.138-.195.27-.43.561-.383.28.05.363.3.433.53.08.249.14.505.179.764.048.351.063.707.09 1.03-.045.812-.144 1.581-.415 2.32-.03.087-.066.172-.106.254-.123.23-.266.252-.46.068a1.199 1.199 0 01-.135-.153c-.94-1.25-1.11-3.058-.142-4.428l-.005-.002zM8.537 7.224c.02-.193.05-.384.093-.573.05-.186.192-.246.376-.18.107.04.21.091.306.154.884.59 1.478 1.39 1.726 2.433.06.256.129.51.172.77.064.382-.118.543-.47.398-1.422-.58-2.195-1.494-2.203-3.002zM21.014 24.2c-.53.535-1.04 1.098-1.664 1.535a5.208 5.208 0 01-2.408.933c-.272.032-.545.053-.818.069-.741.04-1.453-.121-2.166-.297a1.824 1.824 0 01-.473-.2c-.076-.046-.184-.172-.167-.226a.438.438 0 01.229-.215c.118-.043.24-.074.365-.09 1.036-.23 2.083-.421 3.107-.696 1.348-.362 2.676-.788 4.017-1.186a.986.986 0 01.126-.02l.06.064c-.068.11-.117.24-.208.33zm2.976-6.555c-.811 1.316-1.567 2.669-2.561 3.861-1.086 1.3-2.476 2.085-4.109 2.472-.917.22-1.852.343-2.794.267-1.863-.153-3.548-.733-4.938-2.059-.942-.895-1.679-1.941-2.402-3.001-.215-.314-.306-.678-.189-1.05.421-1.295.821-2.599 1.3-3.874a7.617 7.617 0 011.864-2.86c1.025-.98 2.177-1.758 3.6-2.035.47-.09.951-.123 1.205-.153 2.435.045 4.293.905 5.844 2.447.79.786 1.351 1.729 1.772 2.76.278.682.625 1.324 1.13 1.873.126.15.229.316.306.496a.861.861 0 01-.028.856z"
      ></path>
      <path
        fill="#4D403F"
        d="M23.711 16.291c-.504-.549-.852-1.19-1.13-1.873-.42-1.03-.981-1.974-1.772-2.76-1.551-1.543-3.41-2.402-5.844-2.446-.254.031-.735.063-1.205.153-1.423.277-2.577 1.055-3.6 2.036a7.617 7.617 0 00-1.864 2.86c-.478 1.274-.878 2.578-1.3 3.874-.12.37-.026.735.19 1.049.723 1.06 1.46 2.106 2.399 3.001 1.39 1.326 3.074 1.906 4.938 2.059.94.076 1.874-.048 2.794-.267 1.632-.387 3.022-1.174 4.108-2.472.998-1.192 1.754-2.545 2.565-3.861a.861.861 0 00.027-.856 1.967 1.967 0 00-.306-.497zm-4.428 5.195c-1.12.782-2.385 1.19-3.743 1.34-1.651.185-3.135-.214-4.446-1.233a1.96 1.96 0 01-.147-.141c-1.116-.918-1.814-2.086-1.993-3.527-.213-1.706.353-3.212 1.3-4.584.776-1.126 1.793-1.962 3.118-2.364 2.453-.745 5.603.064 7.274 2.796.525.85.853 1.807.96 2.8.007.126.007.252 0 .378.038 1.927-.758 3.44-2.323 4.535z"
      ></path>
      <path
        fill={`var(--color-${classType}-dark)`}
        d="M21.037 23.823c-1.339.398-2.67.824-4.017 1.186-1.024.274-2.07.466-3.108.695a1.721 1.721 0 00-.364.091.438.438 0 00-.23.215c-.017.054.089.18.168.225.147.09.306.157.472.2.711.177 1.426.337 2.166.297.273-.015.546-.036.819-.068a5.208 5.208 0 002.407-.929c.625-.436 1.134-.997 1.665-1.534.09-.091.14-.221.208-.334l-.06-.065a.986.986 0 00-.126.021z"
      ></path>
      <path
        fill="#4C4040"
        d="M14.367 8.858c.195.185.338.164.46-.068.04-.082.075-.166.105-.253.271-.74.37-1.508.415-2.32-.027-.323-.041-.68-.09-1.03a4.758 4.758 0 00-.175-.771c-.07-.23-.153-.48-.432-.53-.291-.05-.424.185-.562.383-.966 1.372-.796 3.179.146 4.435.04.055.084.107.133.154zm4.49.645a7.008 7.008 0 002.565-2.383c.124-.204.216-.427.271-.66.094-.382-.063-.555-.449-.502a5.721 5.721 0 00-.901.207c-1.336.409-2.092 1.416-2.09 2.766v.206c.025.478.18.573.604.366zm-8.118.724c.352.145.535-.02.47-.398-.044-.26-.112-.514-.172-.77-.249-1.043-.841-1.842-1.727-2.433a1.448 1.448 0 00-.306-.153c-.183-.068-.325-.007-.375.179-.043.189-.074.38-.094.573.01 1.507.783 2.42 2.204 3.002z"
      ></path>
      <path
        fill="#FD8917"
        d="M19.07 15.037c-.782-.145-1.568-.102-2.348.03-.146.025-.295.036-.442.054.239 1.651.298 3.302-.03 4.948a7.15 7.15 0 01-.278.988c-.192.548-.72.704-1.186.358a1.934 1.934 0 01-.357-.367c-.925-1.191-1.474-2.543-1.71-4.027-.841.787-1.453 1.716-1.736 2.844-.11.432-.158.87-.045 1.315.013.09.016.181.01.272.046.05.095.096.146.14 1.312 1.022 2.795 1.419 4.447 1.235 1.357-.153 2.624-.56 3.743-1.341 1.564-1.095 2.36-2.608 2.325-4.534-.183-.288-.339-.598-.553-.86-.511-.622-1.218-.912-1.987-1.055z"
      ></path>
      <path
        fill="#FDB919"
        d="M21.606 16.574a6.701 6.701 0 00-.96-2.801c-1.671-2.733-4.817-3.542-7.274-2.797-1.325.403-2.342 1.24-3.118 2.365-.947 1.377-1.513 2.878-1.3 4.584.18 1.441.878 2.606 1.994 3.527a1.18 1.18 0 00-.01-.272c-.112-.445-.064-.883.046-1.315.283-1.128.894-2.057 1.736-2.844l-.064-1.07c-.55.27-1.178.334-1.772.181-.796-.205-1.098-.897-.651-1.592.575-.894 1.434-1.31 2.493-1.32.07 0 .137.004.206.007a2.51 2.51 0 01.48-1.05c.134-.171.295-.318.476-.438.387-.25.777-.22 1.088.12.236.262.435.556.59.873.374.753.54 1.574.714 2.39.148-.017.296-.028.442-.053.781-.133 1.566-.175 2.348-.03.768.142 1.476.433 1.988 1.055.215.262.37.571.554.86a3.456 3.456 0 00-.006-.38z"
      ></path>
      <path
        fill="#4E3F3F"
        d="M14.43 21.048c.102.138.222.261.356.367.467.346.994.19 1.186-.358a7.15 7.15 0 00.278-.988c.328-1.646.269-3.297.03-4.948-.175-.816-.34-1.637-.714-2.39a3.814 3.814 0 00-.59-.874c-.312-.34-.702-.37-1.089-.119-.18.119-.341.266-.475.437a2.51 2.51 0 00-.48 1.05c.688.227 1.008.64.993 1.264.002.291-.12.57-.337.765-.29.254-.618.465-.93.694l.064 1.07c.233 1.487.782 2.839 1.707 4.03z"
      ></path>
    </g>
  );
};

export default AxieIconEye;
