// @flow
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { lastUpdate } from '../../../../libs/lastUpdate';

type Props = {
  data: Object,
};

function ListItem({ data }: Props) {
  // format message to get header
  let { message } = data.commit;
  const noIndex = message.indexOf('\n');
  message = message.slice(0, noIndex);

  const lastUpdateMessage = lastUpdate(data.commit.committer.date);
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText} numberOfLines={2}>
          {message}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: data.author.avatar_url }}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>
            {`${data.commit.author.name} `}
            authored
          </Text>
          <Text style={styles.detailText}>
            {`${data.commit.committer.name} `}
            committed
          </Text>
          <Text style={styles.detailText}>
            committed
            {` ${lastUpdateMessage}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ListItem;
