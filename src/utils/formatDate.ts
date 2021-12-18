import {format, zonedTimeToUtc} from "date-fns-tz";

export const formatDate = (date:string) => {
    return format(
        zonedTimeToUtc(
            new Date(date),
            "America/Brasilia"
        ),
        "dd/MM/yyyy 'às' HH:mm");
}

