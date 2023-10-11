import { Card, Text } from 'react-native-paper'
import {StyleSheet} from 'react-native'

export function CardComponent({ nome, tipoSanguineo }) {
    return (
        <Card style={styles.card}>
            <Card.Title title={nome} />
            <Card.Content>
                <Text style={styles.contentText}>
                    Tipo Sanguineo: {tipoSanguineo}
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card:{
        marginTop: 12,
        backgroundColor: 'green',
        color: 'white'
    },
    contentText:{
        color: 'white'
    }
})