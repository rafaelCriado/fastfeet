import Mail from '../../lib/mail';

class NewDeliveryMail {
  get key() {
    return 'NewDeliveryMail';
  }

  async handle({ data }) {
    const { delivery } = data;

    console.log('A fila executou', delivery);

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Nova encomenda disponível',
      template: 'new_delivery',
      context: {
        deliveryman: delivery.deliveryman.name,
        recipient: delivery.recipient.name,
        product: delivery.product,
      },
    });
  }
}

export default new NewDeliveryMail();
