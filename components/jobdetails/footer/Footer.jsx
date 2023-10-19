import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./footer.style";
import { icons } from "../../../constants";
import { useState } from "react";

const Footer = ({ url }) => {
  const [like, setLike] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn(like)}
        onPress={() => setLike(!like)}
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage(like)}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
