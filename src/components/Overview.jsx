import React from 'react'

function Overview() {
    return (

        <div className='grid grid-cols-4 gap-3 '>
            <div className='totalSales bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid hover:shadow-itemMenuOverview'>
                <div className='flex items-center font-medium text-gray-400 text-sm'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2445 1.29101C14.547 1.39531 14.75 1.68006 14.75 2.00004V9.75004H19C19.2869 9.75004 19.5486 9.91367 19.6742 10.1715C19.7999 10.4294 19.7674 10.7364 19.5906 10.9623L10.5906 22.4623C10.3934 22.7143 10.0581 22.8134 9.75554 22.7091C9.45303 22.6048 9.25001 22.32 9.25001 22V14.25H5.00001C4.71315 14.25 4.45142 14.0864 4.32578 13.8285C4.20013 13.5707 4.23259 13.2637 4.40938 13.0378L13.4094 1.53781C13.6066 1.28582 13.942 1.1867 14.2445 1.29101ZM6.53934 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5V19.8248L17.4607 11.25H14C13.5858 11.25 13.25 10.9143 13.25 10.5V4.1753L6.53934 12.75Z" fill="#5b5ee7" />
                    </svg>

                    <span className="ml-1">Total Sales</span>
                </div>
                <p className='font-bold text-3xl pt-1'>
                    $12,345
                </p>
            </div>
            <div className='newUsers bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                <div className='flex items-center font-medium text-gray-400 text-sm'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38566 15.6959C4.19864 16.2895 3.75 16.9706 3.75 17.5C3.75 18.0294 4.19864 18.7105 5.38566 19.3041C6.52782 19.8751 8.15819 20.25 10 20.25C11.8418 20.25 13.4722 19.8751 14.6143 19.3041C15.8014 18.7105 16.25 18.0294 16.25 17.5C16.25 16.9706 15.8014 16.2895 14.6143 15.6959C13.4722 15.1249 11.8418 14.75 10 14.75C8.15819 14.75 6.52782 15.1249 5.38566 15.6959ZM4.71484 14.3543C6.10618 13.6586 7.97582 13.25 10 13.25C12.0242 13.25 13.8938 13.6586 15.2852 14.3543C16.6316 15.0275 17.75 16.0964 17.75 17.5C17.75 18.9036 16.6316 19.9725 15.2852 20.6457C13.8938 21.3414 12.0242 21.75 10 21.75C7.97582 21.75 6.10618 21.3414 4.71484 20.6457C3.36836 19.9725 2.25 18.9036 2.25 17.5C2.25 16.0964 3.36836 15.0275 4.71484 14.3543Z" fill="#8c5df7" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.75C8.20507 3.75 6.75 5.20507 6.75 7C6.75 8.79493 8.20507 10.25 10 10.25C11.7949 10.25 13.25 8.79493 13.25 7C13.25 5.20507 11.7949 3.75 10 3.75ZM5.25 7C5.25 4.37665 7.37665 2.25 10 2.25C12.6234 2.25 14.75 4.37665 14.75 7C14.75 9.62335 12.6234 11.75 10 11.75C7.37665 11.75 5.25 9.62335 5.25 7Z" fill="#8c5df7" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0448 10.2496C14.7228 10.7485 14.3288 11.1965 13.8774 11.5791C14.2319 11.6901 14.609 11.75 15.0001 11.75C17.0712 11.75 18.7501 10.0711 18.7501 8C18.7501 6.04422 17.2529 4.43814 15.3421 4.26538C15.6083 4.78435 15.8011 5.34717 15.9068 5.94015C16.6979 6.28887 17.2501 7.07994 17.2501 8C17.2501 9.2277 16.2668 10.2257 15.0448 10.2496Z" fill="#8c5df7" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9997 17.5563C18.9896 18.1704 18.8148 18.7605 18.5009 19.3108C18.8693 19.2094 19.2144 19.092 19.5312 18.96C20.1284 18.7112 20.6606 18.3958 21.055 18.0073C21.452 17.6162 21.7501 17.1064 21.7501 16.4999C21.7501 15.8935 21.452 15.3836 21.055 14.9925C20.6606 14.604 20.1284 14.2887 19.5312 14.0399C18.5086 13.6138 17.1907 13.3394 15.7495 13.2683C16.7517 13.7774 17.5702 14.4169 18.1352 15.1442C18.4329 15.2274 18.7072 15.3215 18.9543 15.4245C19.443 15.6281 19.7894 15.8514 20.0023 16.0611C20.2125 16.2682 20.2501 16.416 20.2501 16.4999C20.2501 16.5838 20.2125 16.7317 20.0023 16.9388C19.7961 17.1419 19.4645 17.3578 18.9997 17.5563Z" fill="#8c5df7" />
                    </svg>

                    <span className="ml-1"> New Users</span>
                </div>
                <p className='font-bold text-3xl pt-1'>
                    1,234
                </p>
            </div>
            <div className='totalProducts bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                <div className='flex items-center font-medium text-gray-400 text-sm'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 19.75C9.08579 19.75 8.75 20.0858 8.75 20.5C8.75 20.9142 9.08579 21.25 9.5 21.25C9.91421 21.25 10.25 20.9142 10.25 20.5C10.25 20.0858 9.91421 19.75 9.5 19.75ZM7.25 20.5C7.25 19.2574 8.25736 18.25 9.5 18.25C10.7426 18.25 11.75 19.2574 11.75 20.5C11.75 21.7426 10.7426 22.75 9.5 22.75C8.25736 22.75 7.25 21.7426 7.25 20.5Z" fill="#eb4798" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 19.75C18.0858 19.75 17.75 20.0858 17.75 20.5C17.75 20.9142 18.0858 21.25 18.5 21.25C18.9142 21.25 19.25 20.9142 19.25 20.5C19.25 20.0858 18.9142 19.75 18.5 19.75ZM16.25 20.5C16.25 19.2574 17.2574 18.25 18.5 18.25C19.7426 18.25 20.75 19.2574 20.75 20.5C20.75 21.7426 19.7426 22.75 18.5 22.75C17.2574 22.75 16.25 21.7426 16.25 20.5Z" fill="#eb4798" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H4C5.25878 1.25 6.32002 2.09575 6.64648 3.25H18C20.6234 3.25 22.75 5.37665 22.75 8V13C22.75 15.6234 20.6234 17.75 18 17.75H10C7.37665 17.75 5.25 15.6234 5.25 13V4C5.25 3.30964 4.69036 2.75 4 2.75H2C1.58579 2.75 1.25 2.41421 1.25 2ZM6.75 8.75V13C6.75 14.7949 8.20507 16.25 10 16.25H18C19.7949 16.25 21.25 14.7949 21.25 13V8.75H6.75ZM21.163 7.25H6.75V4.75H18C19.5368 4.75 20.8245 5.81665 21.163 7.25Z" fill="#eb4798" />
                    </svg>

                    <span className="ml-1">
                        Total Products
                    </span>
                </div>
                <p className='font-bold text-3xl pt-1'>
                    567
                </p>
            </div>
            <div className='conversionRate bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                <div className='flex items-center font-medium text-gray-400 text-sm'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 3C13.1046 3 14 3.89543 14 5L14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19L10 5C10 3.89543 10.8954 3 12 3ZM4 12C5.10457 12 6 12.8954 6 14V19C6 20.1046 5.10457 21 4 21C2.89543 21 2 20.1046 2 19V14C2 12.8954 2.89543 12 4 12ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V19C18 20.1046 18.8954 21 20 21C21.1046 21 22 20.1046 22 19V10Z"
                            fill="#13ba82" />
                    </svg>

                    <span className="ml-1">
                        Conversion Rate
                    </span>
                </div>
                <p className='font-bold text-3xl pt-1'>
                    12.5%
                </p>
            </div>
        </div>

    )
}

export default Overview
