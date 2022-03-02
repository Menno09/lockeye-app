import * as Notifications from 'expo-notifications'
import moment from 'moment'
import LogItemProps from '../components/ui/Logitem/Logitem.props'

// example Notification body 
export const schedulePushNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'The Door has unlocked',
      body: `John has been detected`,
      data: {
        data: 'there has been movement detected John for 00:05:00 and has unlocked the door',
      },
    },
    trigger: { seconds: 2 },
  })
}

// Notification with data from activitie
export const pushNotification = async (item: LogItemProps) => {
  let title = 'Movement detected '
  if (item.events.doorUnlocked) {
    title = 'The Door has unlocked'
  }

  const time = moment
    .utc(parseFloat(item.events.eventTime) * 60)
    .format('HH:mm:ss')
  const date = moment(item.date).format('MMMM Do YYYY, h:mm:ss a')

  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: `${item.title} has been detected`,
      data: {
        data: `
            At ${date}, there has been movment detected ${item.title} for ${time}
        `,
      },
    },
    trigger: { seconds: 10 },
  })
}
