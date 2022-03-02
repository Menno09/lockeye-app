import { observer } from 'mobx-react'
import moment from 'moment'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { BarChart, ContributionGraph, LineChart } from 'react-native-chart-kit'
import { scale } from 'react-native-size-matters'
import { eventsPerDay, months, items } from '../../constants/Data'
import { useLockeye } from '../../hooks/stateHooks'

import { GraphStackNavigationProp } from '../../navigation/GraphStack/GraphStackParamList'
import { ActivitiesModelInstance } from '../../stores/LockeyeStore/ActivitiesModel'
import { colors, margins, typings } from '../../theme'

const GraphOverviewScreen = ({ navigation }: Props) => {
  const LockeyeStore = useLockeye()
  const { activities } = LockeyeStore

  const chartConfig = {
    backgroundGradientFrom: colors.white,
    backgroundGradientTo: colors.white,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(197, 22, 76, ${opacity})`,
  }

  const barsDataGraph = (activities: any) => {
    const currentMonth = new Date().getMonth() + 1
    const months = [currentMonth - 2, currentMonth - 1, currentMonth]

    console.log('current  ' + months[2])

    const dates = activities.map((item: ActivitiesModelInstance) => {
      return {
        nbr: parseInt(moment(item.date_created).format('M')),
        time: parseInt(item.event_time),
      }
    })

    const arr = dates.filter((data: { nbr: number; time: string }) => {
      data.nbr === months[2]
      return data.time
    })
    const d = arr.map((item: { time: string }) => {
      return item.time
    })
    return {
      labels: months,
      datasets: [
        {
          data: d,
        },
      ],
    }
  }

  const dataHeatGraph = (activities: [ActivitiesModelInstance]) => {
    const dates = activities.map((item: ActivitiesModelInstance) => {
      return moment(item.date_created).format('YYYY-M-D')
    })

    const count: any = {}
    const result: any = [
      {
        value: '',
        count: 0,
      },
    ]

    dates.forEach((item: any) => {
      if (count[item]) {
        count[item] += 1
        return
      }
      count[item] = 1
    })

    for (let prop in count) {
      if (count[prop] >= 2) {
        result.push(prop)
      }
    }
    return result
  }

  useEffect(() => {
    barsDataGraph(activities)
    //  dataHeatGraph(activities)
  })
  console.log(items.events.data[1])

  const data = {
    labels: months,
    datasets: [
      {
        data: items.events.data[1],
        color: (opacity = 1) => `rgba(197, 22, 76, ${opacity})`,
        strokeWidth: 2, // optional
      },
      {
        data: items.events.data[2],
        color: (opacity = 1) => `rgba(134, 200, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: items.events.data[3],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: items.events.labels,
  }

  const barsData = {
    labels: months,
    datasets: [
      {
        data: items.totalEventTimeMonth,
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.graphContainer}>
        <Text style={styles.titleGraph}>Amount of activities</Text>
        <ContributionGraph
          values={eventsPerDay}
          endDate={new Date('2022-01-20')}
          numDays={85}
          width={scale(300)}
          height={220}
          chartConfig={chartConfig}
          tooltipDataAttrs={undefined}
          style={styles.graph}
        />
      </View>
      <View style={styles.graphContainer}>
        <Text style={styles.titleGraph}>Events per month</Text>
        <LineChart
          data={data}
          width={scale(300)}
          height={220}
          bezier
          chartConfig={chartConfig}
          style={styles.graph}
        />
      </View>
      <View style={styles.graphContainer}>
        <Text style={styles.titleGraph}>Event time per month</Text>
        <BarChart
          style={styles.graph}
          data={barsData}
          width={scale(300)}
          height={220}
          fromZero
          yAxisLabel=""
          yAxisSuffix="min"
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  )
}

type Props = {
  navigation: GraphStackNavigationProp<'Graph'>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margins.lg,
  },
  titleGraph: {
    ...typings.h5,
    color: colors.pink,
    marginBottom: margins.sm,
  },
  graphContainer: {
    marginTop: margins.md,
  },
  graph: {
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default observer(GraphOverviewScreen)
