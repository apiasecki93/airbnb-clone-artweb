import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient ";
import ClientOnly from "@/app/components/ClientOnly";


const ReservationsPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <ClientOnly> 
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly> 
        )
    }

    // console.log(currentUser)

    const reservations = await getReservations({ authorId: currentUser.id})


    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No reservations found"
                subtitle="Look like you have no reservations on your property"
            />
            </ClientOnly>
            
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
        </ClientOnly>
        
    )
}

export default ReservationsPage;