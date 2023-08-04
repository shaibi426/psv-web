'use client'

export default function LicenseReport(props) {

    const dates = (props.params.licenseReport)
    const startDate = dates.split('and')[0]
    const endDate = dates.split('and')[1]
    console.log(startDate,endDate)

    return (
       <div>
            LicenseReport
       </div>
    );
}